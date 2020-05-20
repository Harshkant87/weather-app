var random1=Math.random();     //for image on left
random1=random1*6;
random1=Math.ceil(random1);
var randomimg1="images/dice"+random1+".png";
document.querySelector(".img1").setAttribute("src",randomimg1);




var random2=Math.random();     //for image on right
random2=random2*6;
random2=Math.ceil(random2);
var randomimg2="images/dice"+random2+".png";
document.querySelector(".img2").setAttribute("src",randomimg2);


if(random1>random2){
  document.querySelector("h1").innerHTML="Player 1 wins ✌";

}
else if (random1<random2) {
  document.querySelector("h1").innerHTML="Player 2 wins ✌";
}
else{
  document.querySelector("h1").innerHTML="It's a draw 😐";

}
