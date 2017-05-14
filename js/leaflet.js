var map = L.map('mapid',{editable: true}).setView([22.3062, 114.1764], 2);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);
	    
var svg = d3.select(map.getPanes().overlayPane).append("svg"),
g = svg.append("g");

d3.csv("../csv/cities.csv", function(csv) {
	csv.forEach(function(d){
		d.LatLng = new L.LatLng(d.lat,d.lng)
	})

	console.log(csv);

	var feature = g.selectAll("circle")
			.data(csv)
			.enter().append("circle")
			.style("stroke", "black")  
			.style("opacity", .6) 
			.style("fill", "red")
			.attr("r", 10);

	map.on("zoomend", update);
	update();

	function update() {
		feature.attr("transform", 
		function(d) { 
			console.log(map.latLngToLayerPoint(d.LatLng).x);
			return "translate("+ 
				map.latLngToLayerPoint(d.LatLng).x +","+ 
				map.latLngToLayerPoint(d.LatLng).y +")";
			}
		)
	}

});
