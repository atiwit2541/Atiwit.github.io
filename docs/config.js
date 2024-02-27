require('dotenv').config();

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = process.env.API_KEY;
