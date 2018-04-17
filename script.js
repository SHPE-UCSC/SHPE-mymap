L.mapbox.accessToken = 'pk.eyJ1IjoiZG9sYW5vZ3UiLCJhIjoiY2plOTltbWYwMDFwczJ2cjk0eDJ0aHB6MSJ9.-4wKhf0kP6QnBetAQr4YDg';

// map refers to a <div> element with the ID map
// mapbox.streets is the ID of a map on Mapbox.com
var map = L.mapbox.map('map', 'mapbox.light')
  .setView([38, -77], 5);
  //.addControl(L.mapbox.geocoderControl('mapbox.places')); //search bar

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',

    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'San Francisco, CA',
            description: 'description goes here <br> <img src="https://goo.gl/MxSyFb" class="popupimage" /> ',
            'marker-color': '#f9d62e',
            'marker-size': 'large',
            'marker-symbol': 'heart',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.419, 37.774] //[longitude, latitude]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Seattle, WA',
            description: 'description goes here <br> <img src="https://goo.gl/dnJsAA" class="popupimage" /> ',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'cafe',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.34246989999997, 47.6100898] //[longitude, latitude]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Los Angeles, CA',
            description: 'description goes here <br> <img src="https://goo.gl/1WchsK" class="popupimage" /> ',
            'marker-color': '#BE9A6B',
            'marker-size': 'large',
            'marker-symbol': 'dog-park',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.2436849, 34.0522342] //[longitude, latitude]
        }
    }
    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});
