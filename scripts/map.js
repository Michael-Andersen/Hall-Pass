
function microwaves() {
	document.getElementById("clear").style.display = "block";
    document.getElementById("map").src = "images/schoolmapmicrowave.png";
	document.getElementById("sw01blowup").src = "images/SW01-Microwave.png";
	document.getElementById("sw03blowup").src = "images/SW03-Microwave.png";
	document.getElementById("sw05blowup").src = "images/SW05-Microwave.png";
    var outletbutton = document.getElementById('outlet-button');
    var microbutton = document.getElementById('microwave-button');
    var washroombutton = document.getElementById('washroom-button');
    var clearbutton = document.getElementById('clear-button');
    microbutton.style.backgroundColor = "#b0caf4";
    outletbutton.style.backgroundColor = "#eaffff";
    washroombutton.style.backgroundColor = "#eaffff";
    clearbutton.style.backgroundColor = "#eaffff";
}
function power_outlets() {
	document.getElementById("clear").style.display = "block";
    document.getElementById("map").src = "images/schoolmappower.png";
	document.getElementById("sw01blowup").src = "images/SW01-Outlets.png";
	document.getElementById("sw03blowup").src = "images/SW03-Outlets.png";
	document.getElementById("sw05blowup").src = "images/SW05-Outlets.png";
    var outletbutton = document.getElementById('outlet-button');
    var microbutton = document.getElementById('microwave-button');
    var washroombutton = document.getElementById('washroom-button');
    var clearbutton = document.getElementById('clear-button');
    microbutton.style.backgroundColor = "#eaffff";
    outletbutton.style.backgroundColor = "#b0caf4";
    washroombutton.style.backgroundColor = "#eaffff";
    clearbutton.style.backgroundColor = "#eaffff";
}
function washrooms() {
	document.getElementById("clear").style.display = "block";
    document.getElementById("map").src = "images/schoolmapwashroom.png";
	document.getElementById("sw01blowup").src = "images/SW01-Washrooms.png";
    document.getElementById("sw03blowup").src = "images/SW03-Washrooms.png";
	document.getElementById("sw05blowup").src = "images/SW05-Washrooms.png";
    var outletbutton = document.getElementById('outlet-button');
    var microbutton = document.getElementById('microwave-button');
    var washroombutton = document.getElementById('washroom-button');
    var clearbutton = document.getElementById('clear-button');
    microbutton.style.backgroundColor = "#eaffff";
    outletbutton.style.backgroundColor = "#eaffff";
    washroombutton.style.backgroundColor = "#b0caf4";
    clearbutton.style.backgroundColor = "#eaffff";
}
function clearbutton() {
	document.getElementById("clear").style.display = "none";
	document.getElementById("sw01floor2zoomd").style.display = "none";
	document.getElementById("map").src = "images/schoolmap.png";
	document.getElementById("sw01blowup").style.display = "none";
    document.getElementById("sw03blowup").style.display ="none";
	document.getElementById("sw05blowup").style.display  ="none";
    var outletbutton = document.getElementById('outlet-button');
    var microbutton = document.getElementById('microwave-button');
    var washroombutton = document.getElementById('washroom-button');
    var clearbutton = document.getElementById('clear-button');
    microbutton.style.backgroundColor = "#eaffff";
    outletbutton.style.backgroundColor = "#eaffff";
    washroombutton.style.backgroundColor = "#eaffff";
    clearbutton.style.backgroundColor = "#eaffff";
}
function changeBackground(x) {
	x.style.color = "#89b6ff";
}

function changeBackgroundBack(x) {
	x.style.color = "black";
}