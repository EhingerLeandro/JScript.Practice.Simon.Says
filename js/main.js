let order=[];
let playOrder= [];
let flash;//booleano
let turn;//booleano
let good;//booleano
let compTurn;//booleano
let intervalId;//booleano
let strict=false;
let noise=false;
let on=false;
let win;

const turnCounter= document.querySelector("#turn");
const topLeft= document.querySelector("#topleft");
const topRight= document.querySelector("#topright");
const bottomLeft= document.querySelector("#bottomLeft");
const bottomRight= document.querySelector("#bottomright");
const strictButton= document.querySelector("#strict");
const onButton= document.querySelector("#on");
const startButton= document.querySelector("#start");

strictButton.addEventListener("click", (event)=>{
	if(strictButton.checked===true){
		strict=true;
	}else{
		strict=false;
	}
});

onButton.addEventListener("click", (event)=>{
	if(onButton.checked===true){
		turnCounter.innerHTML="-";
		on=true;
	}else{
		turnCounter.innerHTML="";
		on=false;
	}
});

startButton.addEventListener("click", (event)=>{
	if(on||win){
		play();
	}
});

function play(){
	win=false;
	order=[];
	playerOder=[];
	flash=0;
	intervalID=0;
	turn=1;
	turnCounter.innerHTML= 1;
	good=true;
	for(i=0; i<20; i++){
		order.push(Math.floor(Math.random()*4)+1)
	} 
	compTurn=true;
	intervalID=setInterval(gameTurn, 800);

}