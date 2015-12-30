// Necessary elements // http://www.w3schools.com/canvas/canvas_coordinates.asp
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

// Draw a Line //
ctx.moveTo(0,0);
ctx.stroke();

// Draw a Circle //
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

// Draw a Fill Text //
ctx.font = "30px Arial";
ctx.fillText("User input goes here",10,50);

// Draw a Stroke Text
ctx.font = "30px Arial";
ctx.strokeText("User input goes here",10,50);

// Draw a Linear Gradient //

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

// Drawa Circular Gradient
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

// Draw an Image
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img,10,10);

