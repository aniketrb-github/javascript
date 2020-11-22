// New way to get the elements 
const introTxt = document.querySelector(".intro");
const changeColorBtn = document.querySelector("#btnChangeColor");

// Old school way
const note = document.getElementById("lblNote");

console.log("\t"+introTxt.textContent + "\n\t" + changeColorBtn.innerHTML + "\n\t"+ note.textContent);

// Manipulating the CSS via JS
/*introTxt.style.color = "red";
introTxt.style.backgroundColor = "yellow";*/

// adding a .css styling dynamically
// introTxt.classList.add("changeStyle1");
// introTxt.classList.remove("changeStyle1");

// 'click' is the button event, function is the callback function
changeColorBtn.addEventListener("click", function(){
    introTxt.classList.toggle("changeStyle1");    
});

// QUERY SELECTOR
const namesList = document.querySelectorAll(".name-list li");
console.log(namesList);

 
// -----------------------
const nameList = document.querySelector(".name-list");
const addNewListBtn = document.querySelector("#btnAddList");
const listInput = document.querySelector(".listInput");

addNewListBtn.addEventListener("click", function(){
    const newLiElement = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    newLiElement.append(liContent);
    nameList.append(newLiElement);    
});
