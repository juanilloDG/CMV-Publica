var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arimo";
ctx.strokeStyle = ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * 1) + ', ' + Math.floor(255 - 42.5 * 3   ) + ')';
ctx.strokeText("Star Wars", 10, 50);