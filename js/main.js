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
})

onButton.addEventListener("click", (event)=>{
	if(onButton.checked===true){
		turnCounter.innerHTML="-";
		on=true;
	}else{
		turnCounter.innerHTML="";
		on=false;
	}
})