//ELEMENT SELECTORS.
//===================
let skillPoint = document.querySelectorAll(".point");
let addButton = document.querySelectorAll(".add-button");
let subButton = document.querySelectorAll(".sub-button");

//CODE FOR THE ADDITION FUNCTIONALITY.
//=====================================
for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", function () {
    let counter = skillPoint[i].innerHTML;
    counter++;
    skillPoint[i].innerHTML = counter;
  });
}

//CODE FOR THE SUBTRACTION FUNCTIONALITY.
//=======================================
for (let i = 0; i < subButton.length; i++) {
  subButton[i].addEventListener("click", function () {
    let counter = skillPoint[i].innerHTML;
    counter--;
    skillPoint[i].innerHTML = counter;
  });
}
