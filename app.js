/* eslint-disable */
import "./style.css";
function cardGeneration(){
    

 const iconramdon= ["♦", "♥", "♠", "♣"];
 const numberchance=["2","3","4","5","6","7","8","Q","M","A","K","J",];
  
 let ramdonnumber = Math.floor(Math.random() * numberchance.length);
 wherevernumber.innerHTML = numberchance[ramdonnumber];

 let oneicon = document.getElementById("oneicon");
 let twoicon = document.getElementById("twoicon");

 let wherevericon =Math.floor(Math.random()* iconramdon.length );

 if (
  iconramdon[wherevericon]=="♥" ||
  iconramdon[wherevericon]=="♦"
 ){
    oneicon.style.color="red";
    twoicon.style.color = "red";
 } else {
    oneicon.style.color="black";
    twoicon.style.color = "black";
 }

 oneicon.innerHTML = iconramdon[wherevericon];
 twoicon.innerHTML = iconramdon[wherevericon];
}

 window.onload = function() {
    //write your code here
    cardGenerator();
  
    setInterval(() => {
      cardGenerator();
    }, 10000);

    let buttomchances = document.getElementById("buttonsito");
    buttomchances.addEventListener("click",function() { cardGeneration(); } )
}