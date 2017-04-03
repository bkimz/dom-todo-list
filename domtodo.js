alert("connected");

let allLi =  document.querySelectorAll("li");

for(let i = 0; i < allLi.length; i++){
	allLi[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	})
	allLi[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	})
	allLi[i].addEventListener("click", function(){
		this.classList.toggle("done");
	})
}
// allLi.addEventListener("mouseover",function(){

// 	console.log("mouseover detected");
// 	allLi.style.color = "green";
// });

// allLi.addEventListener("mouseout", function(){
// 	allLi.style.color = "black";
// })