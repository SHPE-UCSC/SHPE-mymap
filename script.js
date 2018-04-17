// get API token

// map refers to a <div> element with the ID map
// mapbox.streets is the ID of a map on Mapbox.com
var map = L.mapbox.map('map', 'mapbox.light') // you can customize your map
  .setView([lat, long], zoom);
  
  //.addControl(L.mapbox.geocoderControl('mapbox.places')); //search bar

// draw new layer

var geojson = {
    type: 'FeatureCollection',

    // This is an array of Map Point objects
    features: [
    
    {
       //objects go here
    }
    ]
};

// Use your json array to draw onto the new layer

// set the event handler
