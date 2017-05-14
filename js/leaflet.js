var map = L.map('mapid',{editable: true}).setView([22.3062, 114.1764], 2);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

var cities=[
	["Iwate",38.991491,141.251303],
	["Stockholm",59.329323,18.068581],
	["London",51.507351,-0.127758],
	["Helsinki",60.169856,24.938379],
	["Copenhagen",55.676097,12.568337],
	["Oslo",59.913869,10.752245],
	["Moscow",55.755826,37.617300],
	["Sankt Peterburg",59.934280,30.335099],
	["Barcelona",41.385064,2.173403],
	["Paris",48.856614,2.352222],
	["Roma",41.902784,12.496366],
	["Dubai",25.204849,55.270783],
	["Hong Kong",22.3062,114.1764],
	["Beijing",39.904200,116.407396],
	["Sydney",-33.868820,151.209296],
	["Cairns",-16.918551,145.778055],
	["Calofornia",36.778261,-119.417932],
	["New York",40.712784,-74.005941]
];

for (var i = 0;i < cities.length; i++){
	console.log(cities[i]);
	marker = new L.marker([cities[i][1],cities[i][2]])
		.bindPopup(cities[i][0])
		.addTo(map);
}