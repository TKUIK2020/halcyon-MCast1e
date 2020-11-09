let computer = document.getElementById("computer");
let code = document.getElementById("code");
let heart = document.getElementById("heart");

function myComputer(){
	alert("Computer");
}
computer.addEventListener('click', myComputer);

function myCode(){
	alert("Code");
}
code.addEventListener('click', myCode);

function myHeart(){
	alert("Heart");
}
heart.addEventListener('click', myHeart);


function Card(src, title, info){
    this.src = src;
    this.title = title;
    this.info = info;
}
var Card1 = new Card("Pin.png","Address","Level 6, 23 Pitt St, Sydney")
var Card2 = new Card("Phone.png","Phone","+61 9 211 3741")
var Card3 = new Card("Message.png","Email","hey@halcyon.com.au")
let divCard = document.querySelector("#cards");
let newDiv = document.createElement('div');
newDiv.className = 'blo';
// let html = "<div class=\"conta\"><p class=\"cent_img\"><img src="+ Card1.src +"></p><p>" + Card1.title + "</p><p>" + Card1.info + "</p></div>";
let html = "<div class=\"conta\"><p class=\"cent_img\"><img src="+ Card1.src +" align=\"center\" hspace=\"30px\"></p></div><div class=\"conta\"><h4>"+ Card1.title +"</h4></div><div class=\"conta\"><h5>"+ Card1.info +"</h5></div>"
newDiv.innerHTML = html;
divCard.appendChild(newDiv);

