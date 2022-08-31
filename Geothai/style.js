var JSONstyle = {
    "version": 8,
    "name": "ThaiLand_Basemap",
    "metadata": {"maputnik:renderer": "mbgljs"},
    "sources": {
      "openmaptiles": {
        "type": "vector",
        "url": "https://tile.i-bitz.co.th/data/v3.json"
      }
    },
    "sprite": "https://tile.i-bitz.co.th/styles/vallaris/sprite",
    "glyphs": "https://tile.i-bitz.co.th/fonts/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": {
            "stops": [
              [1, "rgba(233, 219, 219, 0.68)"],
              [15, "rgba(250, 247, 247, 0.68)"]
            ]
          }
        }
      },
      {
        "id": "landuse-residential",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": [
          "all",
          ["==", "$type", "Polygon"],
          ["==", "class", "residential"]
        ],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(247, 239, 212, 0.59)", "fill-opacity": 0.6}
      },
      {
        "id": "landcover_grass",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "class", "grass"],
        "paint": {"fill-color": "rgba(140, 237, 203, 0.66)", "fill-opacity": 0.45}
      },
      {
        "id": "park",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "park",
        "paint": {"fill-color": "#d8e8c8", "fill-opacity": 1}
      },
      {
        "id": "landcover_wood",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "class", "wood"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "#d8e8c8",
          "fill-opacity": {"base": 1, "stops": [[8, 0.6], [22, 1]]}
        }
      },
      {
        "id": "water",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "water",
        "filter": ["==", "$type", "Polygon"],
        "paint": {"fill-color": "hsl(205, 56%, 73%)", "fill-opacity": 1}
      },
      {
        "id": "landcover-ice-shelf",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "subclass", "ice_shelf"],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "hsl(47, 26%, 88%)", "fill-opacity": 0.8}
      },
      {
        "id": "landcover-glacier",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "subclass", "glacier"],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "hsl(47, 22%, 94%)",
          "fill-opacity": {"base": 1, "stops": [[0, 1], [8, 0.5]]}
        }
      },
      {
        "id": "landcover_sand",
        "type": "fill",
        "metadata": {},
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["all", ["in", "class", "sand"]],
        "paint": {
          "fill-antialias": false,
          "fill-color": "rgba(232, 214, 38, 1)",
          "fill-opacity": 0.3
        }
      },
      {
        "id": "landuse_pitch",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["all", ["==", "class", "pitch"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(214, 243, 195, 0.85)"}
      },
      {
        "id": "landuse_university",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["all", ["==", "class", "university"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(247, 232, 186, 0.46)"}
      },
      {
        "id": "landuse_school",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["all", ["==", "class", "school"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(247, 232, 186, 0.46)", "fill-opacity": 0.5}
      },
      {
        "id": "landuse_hospital",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["all", ["==", "class", "hospital"]],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "rgba(255, 221, 238, 0.57)"}
      },
      {
        "id": "landuse_agriculture",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landuse",
        "filter": ["==", "class", "agriculture"],
        "layout": {"visibility": "visible"},
        "paint": {"fill-color": "#eae0d0"}
      },
      {
        "id": "landuse_overlay_national_park",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "landcover",
        "filter": ["==", "class", "national_park"],
        "paint": {
          "fill-color": "#E1EBB0",
          "fill-opacity": {"base": 1, "stops": [[5, 0], [9, 0.75]]}
        }
      },
      {
        "id": "park_outline",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "park",
        "layout": {"visibility": "visible"},
        "paint": {
          "line-color": "rgba(159, 183, 118, 0.69)",
          "line-dasharray": [0.5, 1]
        }
      },
      {
        "id": "waterway-tunnel",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "tunnel"]
        ],
        "paint": {
          "line-color": "hsl(205, 56%, 73%)",
          "line-dasharray": [3, 3],
          "line-gap-width": {"stops": [[12, 0], [20, 6]]},
          "line-opacity": 1,
          "line-width": {"base": 1.4, "stops": [[8, 1], [20, 2]]}
        }
      },
      {
        "id": "waterway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["!in", "brunnel", "tunnel", "bridge"]
        ],
        "paint": {
          "line-color": "hsl(205, 56%, 73%)",
          "line-opacity": 1,
          "line-width": {"base": 1.4, "stops": [[8, 1], [20, 8]]}
        }
      },
      {
        "id": "tunnel_railway_transit",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 0,
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "tunnel"],
          ["==", "class", "transit"]
        ],
        "layout": {"line-cap": "butt", "line-join": "miter"},
        "paint": {
          "line-color": "rgba(47, 69, 197, 1)",
          "line-dasharray": [1, 0],
          "line-opacity": {"base": 1, "stops": [[11, 0], [16, 1]]},
          "line-width": 3.5
        }
      },
      {
        "id": "building",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "building",
        "paint": {
          "fill-antialias": true,
          "fill-color": "hsl(35, 8%, 85%)",
          "fill-opacity": {"base": 1, "stops": [[13, 0], [15, 1]]},
          "fill-outline-color": {
            "stops": [
              [15, "rgba(236, 231, 231, 1)"],
              [16, "rgba(236, 231, 231, 1)"]
            ]
          }
        }
      },
      {
        "id": "housenumber",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "housenumber",
        "minzoom": 17,
        "filter": ["==", "$type", "Point"],
        "layout": {
          "text-field": "{housenumber}",
          "text-font": ["Kanit"],
          "text-size": 8
        },
        "paint": {"text-color": "rgba(212, 177, 146, 1)"}
      },
      {
        "id": "road_bridge_area",
        "type": "fill",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "Polygon"],
          ["in", "brunnel", "bridge"]
        ],
        "layout": {},
        "paint": {"fill-color": "hsl(47, 26%, 88%)", "fill-opacity": 0.5}
      },
      {
        "id": "road_path",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["in", "class", "path", "track"]
        ],
        "layout": {"line-cap": "square", "line-join": "bevel"},
        "paint": {
          "line-color": "rgba(215, 212, 212, 0.29)",
          "line-dasharray": [1, 1],
          "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 8]]}
        }
      },
      {
        "id": "road_ferry",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 13,
        "filter": ["all", ["==", "class", "ferry"]],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(208, 151, 151, 0.5)",
          "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 5]]},
          "line-dasharray": [1, 2]
        }
      },
      {
        "id": "road_minor",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 13,
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["in", "class", "minor", "service"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(222, 208, 208, 0.41)",
          "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 10]]}
        }
      },
      {
        "id": "tunnel_minor",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "tunnel"],
          ["==", "class", "minor_road"]
        ],
        "layout": {"line-cap": "butt", "line-join": "miter"},
        "paint": {
          "line-color": "#efefef",
          "line-dasharray": [0.36, 0.18],
          "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}
        }
      },
      {
        "id": "tunnel_major",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "tunnel"],
          ["in", "class", "primary", "secondary", "tertiary", "trunk"]
        ],
        "layout": {"line-cap": "butt", "line-join": "miter"},
        "paint": {
          "line-color": "#fff",
          "line-dasharray": [0.28, 0.14],
          "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 30]]}
        }
      },
      {
        "id": "aeroway-area",
        "type": "fill",
        "metadata": {"mapbox:group": "1444849345966.4436"},
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 4,
        "filter": [
          "all",
          ["==", "$type", "Polygon"],
          ["in", "class", "runway", "taxiway"]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "fill-color": "rgba(255, 255, 255, 1)",
          "fill-opacity": {"base": 1, "stops": [[13, 0], [14, 1]]}
        }
      },
      {
        "id": "aeroway-taxiway",
        "type": "line",
        "metadata": {"mapbox:group": "1444849345966.4436"},
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 12,
        "filter": [
          "all",
          ["in", "class", "taxiway"],
          ["==", "$type", "LineString"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(255, 255, 255, 1)",
          "line-opacity": 1,
          "line-width": {"base": 1.5, "stops": [[12, 1], [17, 10]]}
        }
      },
      {
        "id": "aeroway-runway",
        "type": "line",
        "metadata": {"mapbox:group": "1444849345966.4436"},
        "source": "openmaptiles",
        "source-layer": "aeroway",
        "minzoom": 4,
        "filter": [
          "all",
          ["in", "class", "runway"],
          ["==", "$type", "LineString"]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(249, 244, 244, 0.75)",
          "line-opacity": 1,
          "line-width": {"base": 1.5, "stops": [[11, 4], [17, 50]]}
        }
      },
      {
        "id": "road_trunk_primary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["in", "class", "trunk", "primary"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "rgba(255, 204, 136, 0.86)",
          "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 30]]}
        }
      },
      {
        "id": "road_secondary_tertiary",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["in", "class", "secondary", "tertiary"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "rgba(255, 204, 136, 0.86)",
          "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 20]]}
        }
      },
      {
        "id": "road_major_motorway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "class", "motorway"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "rgba(255, 167, 74, 0.71)",
          "line-offset": 0,
          "line-width": {"base": 1.4, "stops": [[8, 1], [16, 10]]}
        }
      },
      {
        "id": "road_oneway_opposite",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "minzoom": 15,
        "filter": ["all", ["==", "oneway", -1]],
        "layout": {
          "icon-image": "oneway",
          "icon-padding": 2,
          "icon-rotate": 180,
          "icon-rotation-alignment": "map",
          "icon-size": {"stops": [[15, 0.5], [19, 1]]},
          "symbol-placement": "line",
          "symbol-spacing": 200,
          "text-font": ["Kanit", "Kanit"],
          "text-size": 8
        },
        "paint": {"icon-opacity": 0.5}
      },
      {
        "id": "railway-transit",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "class", "transit"],
          ["!=", "brunnel", "tunnel"]
        ],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-opacity": {"base": 1, "stops": [[11, 0], [16, 1]]},
          "line-color": "rgba(31, 150, 13, 1)",
          "line-width": 2.5
        }
      },
      {
        "id": "railway",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": ["==", "class", "rail"],
        "layout": {"visibility": "visible"},
        "paint": {
          "line-color": "rgba(117, 115, 112, 1)",
          "line-opacity": 1,
          "line-offset": 0,
          "line-pattern": "",
          "line-blur": 0,
          "line-width": 1.5
        }
      },
      {
        "id": "waterway-bridge-case",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"]
        ],
        "layout": {"line-cap": "butt", "line-join": "miter"},
        "paint": {
          "line-color": "#bbbbbb",
          "line-gap-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]},
          "line-width": {"base": 1.6, "stops": [[12, 0.5], [20, 10]]}
        }
      },
      {
        "id": "waterway-bridge",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "waterway",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "hsl(205, 56%, 73%)",
          "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}
        }
      },
      {
        "id": "bridge_path_pedestrian_casing",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"],
          ["in", "class", "path", "pedestrian"]
        ],
        "paint": {
          "line-color": "hsl(35, 6%, 80%)",
          "line-dasharray": [1, 0],
          "line-width": {"base": 1.2, "stops": [[14, 1.5], [20, 18]]}
        }
      },
      {
        "id": "bridge_path_pedestrian",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"],
          ["in", "class", "path", "pedestrian"]
        ],
        "paint": {
          "line-color": "hsl(0, 0%, 100%)",
          "line-dasharray": [1, 0.3],
          "line-width": {"base": 1.2, "stops": [[14, 0.5], [20, 10]]}
        }
      },
      {
        "id": "bridge_minor case",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"],
          ["==", "class", "minor_road"]
        ],
        "layout": {"line-cap": "butt", "line-join": "miter"},
        "paint": {
          "line-color": "#dedede",
          "line-gap-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]},
          "line-width": {"base": 1.6, "stops": [[12, 0.5], [20, 10]]}
        }
      },
      {
        "id": "bridge_major case",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"],
          ["in", "class", "primary", "secondary", "tertiary", "trunk"]
        ],
        "layout": {"line-cap": "butt", "line-join": "miter"},
        "paint": {
          "line-color": "rgba(244, 235, 235, 1)",
          "line-gap-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]},
          "line-width": {"base": 1.6, "stops": [[12, 0.5], [20, 10]]}
        }
      },
      {
        "id": "bridge_minor",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"],
          ["==", "class", "minor_road"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "#efefef",
          "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}
        }
      },
      {
        "id": "bridge_major",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "transportation",
        "filter": [
          "all",
          ["==", "$type", "LineString"],
          ["==", "brunnel", "bridge"],
          ["in", "class", "primary", "secondary", "tertiary", "trunk"]
        ],
        "layout": {"line-cap": "round", "line-join": "round"},
        "paint": {
          "line-color": "rgba(255, 255, 255, 0)",
          "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 30]]}
        }
      },
      {
        "id": "admin_sub",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "boundary",
        "filter": ["all", ["in", "admin_level", 4, 6, 8], ["!=", "maritime", 1]],
        "layout": {"visibility": "visible", "line-miter-limit": 2},
        "paint": {
          "line-color": "rgba(148, 148, 148, 0.9)",
          "line-dasharray": [4, 1.2],
          "line-width": 0.7,
          "line-blur": 0
        }
      },
      {
        "id": "admin_country",
        "type": "line",
        "source": "openmaptiles",
        "source-layer": "boundary",
        "filter": [
          "all",
          ["<=", "admin_level", 2],
          ["==", "$type", "LineString"],
          ["==", "maritime", 0]
        ],
        "layout": {
          "line-cap": "round",
          "line-join": "round",
          "visibility": "visible"
        },
        "paint": {
          "line-color": "rgba(56, 56, 56, 1)",
          "line-width": {"base": 1.3, "stops": [[3, 0.6], [22, 15]]}
        }
      },
      {
        "id": "poi_label",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 14,
        "filter": ["all", ["==", "$type", "Point"], ["==", "rank", 1]],
        "layout": {
          "icon-size": 1,
          "text-anchor": "top",
          "text-field": "{name:latin}\n{name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 8,
          "text-offset": [0, 0.5],
          "text-size": 11,
          "visibility": "visible"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.75)",
          "text-halo-width": 1
        }
      },
      {
        "id": "airport-label",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "aerodrome_label",
        "minzoom": 10,
        "filter": ["all", ["has", "iata"]],
        "layout": {
          "icon-size": 1,
          "text-anchor": "top",
          "text-field": "{name:latin}\n{name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 8,
          "text-offset": [0, 0.5],
          "text-size": 8,
          "visibility": "visible",
          "icon-image": "airport_11"
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 1,
          "text-halo-color": "rgba(255,255,255,0.75)",
          "text-halo-width": 1
        }
      },
      {
        "id": "road_major_label",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "transportation_name",
        "filter": ["==", "$type", "LineString"],
        "layout": {
          "symbol-placement": "line",
          "text-field": "{name:latin} {name:nonlatin}",
          "text-font": ["Kanit"],
          "text-letter-spacing": 0.1,
          "text-rotation-alignment": "map",
          "text-size": {"base": 1.4, "stops": [[10, 8], [20, 10]]},
          "text-transform": "uppercase"
        },
        "paint": {
          "text-color": "#000",
          "text-halo-color": "hsl(0, 0%, 100%)",
          "text-halo-width": 2
        }
      },
      {
        "id": "place_label_other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "minzoom": 8,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["!in", "class", "city", "state", "country", "continent"]
        ],
        "layout": {
          "text-anchor": "center",
          "text-field": "{name:latin}\n{name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 6,
          "text-size": {"stops": [[8, 9], [12, 12]]},
          "visibility": "visible"
        },
        "paint": {
          "text-color": "hsl(0, 0%, 25%)",
          "text-halo-blur": 0,
          "text-halo-color": "hsl(0, 0%, 100%)",
          "text-halo-width": 1.5
        }
      },
      {
        "id": "place_label_city",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "maxzoom": 16,
        "filter": ["all", ["==", "$type", "Point"], ["==", "class", "city"]],
        "layout": {
          "text-field": "{name:latin}\n{name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 10,
          "text-size": {"stops": [[3, 8], [8, 10]]},
          "visibility": "visible"
        },
        "paint": {
          "text-color": "hsl(0, 0%, 0%)",
          "text-halo-blur": 0,
          "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
          "text-halo-width": 2
        }
      },
      {
        "id": "country_label-other",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "maxzoom": 12,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["==", "class", "country"],
          ["!has", "iso_a2"]
        ],
        "layout": {
          "text-field": "{name:latin}",
          "text-font": ["Noto Sans Regular"],
          "text-max-width": 10,
          "text-size": {"stops": [[3, 12], [8, 22]]},
          "visibility": "visible"
        },
        "paint": {
          "text-color": "hsl(0, 0%, 13%)",
          "text-halo-blur": 0,
          "text-halo-color": "rgba(255,255,255,0.75)",
          "text-halo-width": 2
        }
      },
      {
        "id": "country_label",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "place",
        "maxzoom": 12,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          ["==", "class", "country"],
          ["has", "iso_a2"]
        ],
        "layout": {
          "text-field": "{name:latin}\n{name:nonlatin}",
          "text-font": ["Kanit", "Kanit"],
          "text-max-width": 10,
          "text-size": {"stops": [[3, 10], [8, 22]]},
          "visibility": "visible"
        },
        "paint": {
          "text-color": "hsl(0, 0%, 13%)",
          "text-halo-blur": 0,
          "text-halo-color": "rgba(255,255,255,0.75)",
          "text-halo-width": 2
        }
      },
      {
        "id": "poi_transit",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 14,
        "filter": ["all", ["in", "class", "bus", "rail", "airport"]],
        "layout": {
          "icon-image": "{class}_11",
          "text-anchor": "left",
          "text-field": "{name:latin} {name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 9,
          "text-offset": [0.9, 0],
          "text-size": {"stops": [[10, 6], [15, 8], [22, 9]]}
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-color": "rgba(66, 64, 64, 1)",
          "icon-opacity": 0.7
        }
      },
      {
        "id": "poi_z14",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 14,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          [">=", "rank", 1],
          ["<", "rank", 7]
        ],
        "layout": {
          "icon-image": "{class}_11",
          "text-anchor": "top",
          "text-field": "{name_en} {name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-size": {"stops": [[10, 6], [15, 8], [22, 9]]}
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-color": "rgba(66, 64, 64, 1)",
          "icon-opacity": 0.7
        }
      },
      {
        "id": "poi_z15",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 15,
        "filter": [
          "all",
          ["==", "$type", "Point"],
          [">=", "rank", 7],
          ["<", "rank", 20]
        ],
        "layout": {
          "icon-image": "{class}_11",
          "text-anchor": "top",
          "text-field": "{name_en} {name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-size": {"stops": [[2, 6], [10, 8], [15, 9]]}
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-color": "rgba(66, 64, 64, 1)",
          "icon-opacity": 0.7
        }
      },
      {
        "id": "poi_z16",
        "type": "symbol",
        "source": "openmaptiles",
        "source-layer": "poi",
        "minzoom": 16,
        "filter": ["all", ["==", "$type", "Point"], [">=", "rank", 20]],
        "layout": {
          "icon-image": "{class}_11",
          "text-anchor": "top",
          "text-field": "{name_en} {name:nonlatin}",
          "text-font": ["Kanit"],
          "text-max-width": 9,
          "text-offset": [0, 0.6],
          "text-size": {"stops": [[10, 6], [15, 8], [22, 9]]}
        },
        "paint": {
          "text-color": "#666",
          "text-halo-blur": 0.5,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-color": "rgba(66, 64, 64, 1)",
          "icon-opacity": 0.7
        }
      }
    ],
    "id": "Thailand_Basemap_1.0"
  }