//toggle for menus
$(document).ready(function(){
	$(".sub-btn").click(function(){
		$(this).next(".sub-menu").slideToggle();
	});
});

//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
	menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove("active");
});

//map options
let mapOptions = {
	center: [42.860, 3.472],
	zoom:6,
	zoomControl: false
}

//create map
var map = L.map('map',mapOptions)

let layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
layer.addTo(map);

//create layer para os Portos
var Pportos = $.getJSON("Portos.json");
Pportos.then(function(data){
	var Porto = L.geoJson(data, {
		filter: function(feature, layer){
				return feature.properties.NomePorto == "Porto"
		}
	});

	var Lisboa = L.geoJson(data, {
		filter: function(feature, layer){
				return feature.properties.NomePorto == "Lisboa"
		}
	});

//create route for viagens
var viagem1 = for (var i = 0, latlngs = [], len = viagemteste.length; i < len; i++) {
			latlngs.push(new L.LatLng(viagemteste[i][0], viagemteste[i][1]));
		}

var path = L.polyline(latlngs);
map.addLayer(L.marker(latlngs[0]));
map.addLayer(L.marker(latlngs[len - 1]));
map.addLayer(path);
path.bindPopup("Hello world");	

function snake() {
			path.snakeIn();
		}

		path.on('snakestart snake snakeend', function(ev){
			console.log(ev.type);
		});


//toggle for Layer Portos
$(".Menu-Porto").click(function(){
	map.addLayer(Porto)
	map.removeLayer(Lisboa)
});

$(".Menu-Lisboa").click(function(){
	map.addLayer(Lisboa)
	map.removeLayer(Porto)
});

$(".1450-btn").click(function(){
	map.addLayer(viagem1)
});



//
});





