//https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

//var mymap = L.map('mapid').setView([43.6093756, 3.867368], 10);
L.tileLayer('https://openweathermap.org/data/2.5/weather?q=Montpellier,fr&appid={id_key}&api_key={accessToken}', {
    maxZoom: 18,
    id_key: 'b6907d289e10d714a6e88b30761fae22',
    accessToken: 'cb73e5ff40af430524f19a9c21366e8c'
}).addTo(mymap);

console.log(mymap)