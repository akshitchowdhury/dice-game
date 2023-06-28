var randomum1 = Math.floor(Math.random()*6) + 1

var randomum2 = Math.floor(Math.random()*6) + 1

// document.querySelector(".img1").setAttribute("src", "images/dice4.png") 

// document.querySelector(".img2").setAttribute("src", "./images/dice2.png") 


var randomimg = "dice"+randomum1+".png";

var imgsrc = "images/"+randomimg

var randomimg2 = "dice"+randomum2+".png";

var imgsrc2 = "images/"+randomimg2



var d1 = document.querySelectorAll("img")[0].setAttribute("src", imgsrc) 

var d2 = document.querySelectorAll("img")[1].setAttribute("src", imgsrc2) 

if(randomum1> randomum2){
    document.querySelector("h1").innerText = "Plyaer1 wins"
}

else if(randomum1== randomum2){
    document.querySelector("h1").innerText = "Draw"

}

else{
    document.querySelector("h1").innerText = "Plyaer2 wins"

}