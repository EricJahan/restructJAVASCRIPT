var mymap = L.map('mapid').setView([43.6093756, 3.867368], 10);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGh1bmRlcm1lcGhpc3RvIiwiYSI6ImNqdjNrbjNqODBqeGY0NG50bG5rYXdleDQifQ.Zk5pNGfW2TmNRbx-xBbOog'
}).addTo(mymap);

mymap.on('click', function (e) {
    var new_marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    new_marker.on('click', function (e) {
        new_marker.removeFrom(mymap);
    })
})

mymap.on("click", function (e) {
    var new_circle = L.circle([e.latlng.lat, e.latlng.lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
    new_circle.on('click', function (e) {
        new_circle.removeFrom(mymap);
    })
})

// mymap.on("click", function(e) {
//     L.polygon([[e.latlng.lat, e.latlng.lng],
//     [e.latlng.lat, e.latlng.lng],
//     [e.latlng.lat, e.latlng.lng]
// ]).addTo(mymap);
// })

// new_marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.").openPopup();
// polygon.bindPopup("I am a polygon.").openPopup();
