mapboxgl.accessToken = 'pk.eyJ1IjoiYXRpd2l0IiwiYSI6ImNraHEzd2dhcjFoM3IzOG14OWE2NDN4d2EifQ.gpmCZaDqR21iu8k2jbv4PQ';
    
const map = new mapboxgl.Map({
    container: 'map',
    zoom: 4.5,
    center: [100, 13],
    projection: 'globe'
});

// Function to fetch data from the API and populate the map
async function fetchAndPopulateMap() {
    try {
        const response = await fetch('https://air4thai.com/forweb/getAQI_JSON.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Construct GeoJSON data from fetched data
        const geojsonData = {
            type: 'FeatureCollection',
            features: data.stations.map(station => ({
                type: 'Feature',
                properties: { 
                    ID: station.stationID,
                    nameEN: station.nameEN, // Include nameEN property
                    PM25_aqi: station.AQILast.PM25.aqi, // Include PM25_aqi property
                    PM25_value: station.AQILast.PM25.value // Include PM25_value property
                },
                geometry: { type: 'Point', coordinates: [parseFloat(station.long), parseFloat(station.lat)] }
            }))
        };

        // Add the GeoJSON source to the map
        map.addSource('points', {
            type: 'geojson',
            data: geojsonData
        });

        // Add cluster source
        map.addSource('clusters_stations', {
            type: 'geojson',
            data: geojsonData,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 // Radius of each cluster when clustering points (pixels)
        });

        // Apply 'within' expression to points
        // Routes within Colorado have 'circle-color': '#f55442'
        // Fallback values (routes not within Colorado) have 'circle-color': '#484848'
        map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'clusters_stations',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': [
                    'step',
                    ['get', 'point_count'],
                    '#51bbd6',
                    100,
                    '#f1f075',
                    750,
                    '#f28cb1'
                ],
                'circle-radius': [
                    'step',
                    ['get', 'point_count'],
                    20,
                    100,
                    30,
                    750,
                    40
                ]
            }
        });

        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'clusters_stations',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': ['get', 'point_count_abbreviated'],
                'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                'text-size': 12
            }
        });

        map.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'clusters_stations',
            filter: ['!', ['has', 'point_count']],
            paint: {
                'circle-color': '#11b4da',
                'circle-radius': 4,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#fff'
            }
        });

        // Event listeners for cluster and unclustered-point layers
        map.on('click', 'clusters', (e) => {
            const features = map.queryRenderedFeatures(e.point, {
                layers: ['clusters']
            });
            const clusterId = features[0].properties.cluster_id;
            map.getSource('clusters_stations').getClusterExpansionZoom(
                clusterId,
                (err, zoom) => {
                    if (err) return;

                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom
                    });
                }
            );
        });

        map.on('click', 'unclustered-point', (e) => {
            const coordinates = e.features[0].geometry.coordinates.slice();
            const aqi = e.features[0].properties.PM25_aqi;
            const value = e.features[0].properties.PM25_value;
            const name = e.features[0].properties.nameEN;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `nameEN: ${name}<br>PM25_aqi: ${aqi}<br>PM25_value: ${value}`
                    
                )
                .addTo(map);
        });

        map.on('mouseenter', 'unclustered-point', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'unclustered-point', () => {
            map.getCanvas().style.cursor = '';
        });
    } catch (error) {
        console.error('There was a problem fetching or parsing the data:', error);
    }
}

// Call the fetchAndPopulateMap function to fetch data from the API and populate the map initially
fetchAndPopulateMap();

// Set up polling to fetch data every hour (3600000 milliseconds)
setInterval(fetchAndPopulateMap, 3600000);