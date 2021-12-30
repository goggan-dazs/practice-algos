console.log("Hello Dom!")

//console.log(document)

let elementH1 = document.getElementById("heading");

let elementsLI = document.getElementsByClassName("item");

let elementH2 = document.createElement("h2");

elementH2.textContent = "This is an H2 tag we made";

let containerDiv = document.getElementById("container");

containerDiv.appendChild(elementH2)

//elementH1.style.color = "#0000FF";
//console.log(elementH1, elementsLI);
console.log(elementH2)

let myButton = document.getElementById("clickMe");

myButton.addEventListener("click", () => {
    alert("The button was clicked!")
    elementH1.style.color = "#FF0000";
})






