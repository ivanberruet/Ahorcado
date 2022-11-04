import React, {useState,useEffect} from 'react'


function draw() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;

	ctx.beginPath();
	ctx.moveTo(200,30);
	ctx.lineTo(200,3);
	ctx.lineTo(100,3);
	ctx.lineTo(100,300);
	ctx.moveTo(0,300);
	ctx.lineTo(200,300);
	ctx.stroke();
}
function drawHead() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;
	
	ctx.beginPath();
	ctx.arc(200, 50, 20, 0, 2 * Math.PI);
	ctx.stroke();
}
function drawBody() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;

	ctx.beginPath();
	ctx.moveTo(200,70);
	ctx.lineTo(200,160);
	ctx.stroke();
}
function drawLeftArm() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;

	ctx.beginPath();
	ctx.moveTo(200,100);
	ctx.lineTo(150,70);
	ctx.stroke();
}
function drawRightArm() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;

	ctx.beginPath();
	ctx.moveTo(200,100);
	ctx.lineTo(250,70);
	ctx.stroke();
}
function drawLeftLeg() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;

	ctx.beginPath();
	ctx.moveTo(200,160);
	ctx.lineTo(150,210);
	ctx.stroke();
}
function drawRightLeg() {
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 6;

	ctx.beginPath();
	ctx.moveTo(200,160);
	ctx.lineTo(250,210);
	ctx.stroke();
}
function gameOver(){
	const canvas = document.querySelector('#canvas');

	if (!canvas.getContext) {
			return;
	}
	const ctx = canvas.getContext('2d');

	ctx.strokeStyle = 'black';
	ctx.lineWidth = 2;
	ctx.beginPath();

	ctx.moveTo(190,45);
	ctx.lineTo(195,40);

	ctx.moveTo(190,40);
	ctx.lineTo(195,45);
	
	ctx.moveTo(205,45);
	ctx.lineTo(210,40);

	ctx.moveTo(205,40);
	ctx.lineTo(210,45);

	ctx.moveTo(200-7,50+7);
	ctx.lineTo(200+7,50+7);

	ctx.stroke();
}

function HangMan({err}) {
	const [screen, setScreen] = useState(window.screen.width)
	useEffect(()=>{
		draw();
	},[])
	
	err===1 && drawHead()
	err===2 && drawBody()
	err===3 && drawLeftArm()
	err===4 && drawRightArm()
	err===5 && drawLeftLeg()
	err===6 && drawRightLeg()
	err===7 && gameOver()

	console.log(screen);
	return (
		<canvas id="canvas" height="303" width={screen>500 ? "500" : "300"}>
		</canvas>
	)
}


export default HangMan
