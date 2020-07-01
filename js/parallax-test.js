$(document).ready(function () {
	$('#top-left').hover(function () {
		$(this).children('.front').stop().animate({ 'top': '150px', 'left': '300px' }, 500);
	}, function () { $(this).children('.front').stop().animate({ 'top': '0px', 'left': '0px' }, 500); });
	$('#top-center').hover(function () {
		$(this).children('.front').stop().animate({ 'top': '150px' }, 500);
	}, function () { $(this).children('.front').stop().animate({ 'top': '0px', 'left': '0px' }, 500); });
	$('#bottom-center').hover(function () {
		$(this).children('.front').stop().animate({ 'top': '-200px' }, 500);
	}, function () { $(this).children('.front').stop().animate({ 'top': '0px', 'left': '0px' }, 500); });
	$('#left').hover(function () {
		$(this).children('.front').stop().animate({ 'left': '300px' }, 500);
	}, function () { $(this).children('.front').stop().animate({ 'top': '0px', 'left': '0px' }, 500); });
	$('#right').hover(function () {
		$(this).children('.front').stop().animate({ 'left': '-300px' }, 500);
	}, function () { $(this).children('.front').stop().animate({ 'top': '0px', 'left': '0px' }, 500); });
	$('#top-right').hover(function () {
		$(this).children('.front').stop().animate({ 'top': '150px', 'left': '-300px' }, 500);
	}, function () { $(this).children('.front').stop().animate({ 'top': '0px', 'left': '0px' }, 500); });
});


var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var itemsHTMLCollection = document.getElementsByClassName('parallax-item');
var pupilsArray = Array.from(pupilsHTMLCollection);
var itemsArray = Array.from(itemsHTMLCollection);

var mouse = {
	x: 0,
	y: 0
}

var input = {
	mouseX: {
		start: 100,
		end: window.innerWidth - 200,
		current: 0,
	},
	mouseY: {
		start: 0,
		end: window.innerHeight,
		current: 0,
	}
}

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

var output = {
	x: {
		start: 150,
		end: -150,
		current: 0,
	},
	y: {
		start: 150,
		end: -150,
		current: 0,
	}
}

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

var updatePupils = function () {
	pupilsArray.forEach(function (pupil, k) {
		pupil.style.transform = 'translate('+output.x.current+'px, '+output.y.current+'px)';
	});
}

var updateParalaxItems = function() {
	itemsArray.forEach(function (item, k) {
		var depth = parseFloat(item.dataset.depth, 10);
		var itemOutput = {
			x: output.x.current - (output.x.current*depth),
			y: output.y.current - (output.y.current*depth),

		};
		console.log(k, 'depth', depth);
		item.style.transform = 'translate('+itemOutput.x+'px, '+itemOutput.y+'px)';
	});
}

var updateInputs = function () {
	input.mouseX.current = mouse.x;
	input.mouseY.current = mouse.y;
	input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
	input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
	if(input.mouseX.fraction > 1){
		input.mouseX.fraction = 1;
	}
	if(input.mouseX.fraction < 0) {
		input.mouseX.fraction = 0;
	}
	if(input.mouseY.fraction > 1){
		input.mouseY.fraction = 1;
	}
	if(input.mouseY.fraction < 0) {
		input.mouseY.fraction = 0;
	}
}

var updateOutputs = function() {
	output.x.current = output.x.end - (input.mouseX.fraction*output.x.range);
	output.y.current = output.y.end - (input.mouseY.fraction*output.y.range);
}

var handleMouseMove = function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
	updateInputs();
	updateOutputs();
	updatePupils();
	updateParalaxItems();


	//console.log('output.x.current', output.x.current)
	//console.log('fractionX', input.mouseX.fraction)
	//console.log('fractionY', input.mouseY.fraction)
}
var handleResize = function () {
	input.mouseX.end = window.innerWidth - 200;
	input.mouseX.range = input.mouseX.end - input.mouseX.start;
	input.mouseY.end = window.innerHeight;
	input.mouseY.range = input.mouseY.end - input.mouseY
	.start;
}


window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
