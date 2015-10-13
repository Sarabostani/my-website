var canvas;
var gl;

function initContextWindow(){
	/*canvas.width = window.innerWidth;
	canvas.height = window.innerHeight-6;*/
	canvas.width = document.body.offsetWidth-300;
	canvas.height = document.body.offsetHeight-6;
	if(gl){
		gl.clearColor(0.2,0.2,0.35,1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
}

function setupWebGL(){
	canvas = get("#canvas");
	initContextWindow();
	try{
		gl = canvas.getContext("experimental-webgl");
	}
	catch(e){
		alert(e);
	}

	if(!gl){
		alert("Couldn't initialize WEBGL! :(");
		return;
	}

	gl.viewportWidth = canvas.width;
	gl.viewportHeight = canvas.height;
	gl.clearColor(0.05,0.05,0.05,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
}

function initGL(){
	setupWebGL();
	
	/*var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);*/

	/*var vsSource = get("#vs-shader").text;
	var fsSource = get("#fs-shader").text;*/

	//gl.compileShader(vertexShader);
	//gl.compileShader(fragmentShader);

	/*var glProgram = gl.createProgram();
	gl.attachShader(glProgram, vertexShader);
	gl.attachShader(glProgram, fragmentShader);*/

	/*gl.linkProgram(glProgram);
	gl.useProgram(glProgram);*/

	var vertices = [-50.0, 50.0, 0.0,
    -50.0,-50.0, 0.0,
    50.0,-50.0, 0.0,
    50.0, 50.0, 0.0];

	var buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
}

function initShaders(){

}

window.addEventListener("resize",function(){
	initContextWindow();
});

window.onload = initGL();