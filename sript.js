let Logo1 = document.querySelector(".logo1");
let Logo2 = document.querySelector(".logo2");
let Logo3 = document.querySelector(".logo3");
let Body = document.querySelector("body");
let Images = document.querySelector(".Pep");
Logo1.addEventListener("click", function () {
	Body.classList.add("blue");
	Body.classList.add("transition");
	Body.classList.remove("red");
	Images.src = "./pepsi001.png";
});
Logo2.addEventListener("click", function () {
	Body.classList.add("red");
	Body.classList.add("transition");
	Body.classList.remove("blue");
	Images.src = "/pepsi002.png";
});
Logo3.addEventListener("click", function () {
	Body.classList.add("dark");
	Body.classList.add("transition");
	Body.classList.remove("red");
	Body.classList.remove("blue");
	Images.src = "./pepsi003.png";
});
