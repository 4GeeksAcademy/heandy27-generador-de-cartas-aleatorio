/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numberCards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let symbolsCard = ["♦", "♥", "♠", "♣"];
  console.log({ symbolsCard });

  function elementRandomGenerator(elements) {
    let randomNumber = Math.floor(Math.random() * (elements.length - 1));
    return elements[randomNumber];
  }

  let resultCardGenerator = elementRandomGenerator(numberCards);
  let resultSymbolGenerator = elementRandomGenerator(symbolsCard);

  let numberElementCard = document.querySelector(".number");
  numberElementCard.innerHTML = resultCardGenerator;

  let symbolTopElementCard = document.querySelector(".symbol-top");
  symbolTopElementCard.innerHTML = resultSymbolGenerator;

  let symbolBottomElementCard = document.querySelector(".symbol-bottom");
  symbolBottomElementCard.innerHTML = resultSymbolGenerator;

  console.dir(symbolBottomElementCard);

  function getSymbolColor(elementColor) {
    if (elementColor.innerHTML == "♥" || elementColor.innerHTML == "♦") {
      elementColor.style.color = "red";
    } else {
      elementColor.style.color = "black";
    }
  }

  let symbolTopColor = getSymbolColor(symbolTopElementCard);
  let symbolBottom = getSymbolColor(symbolBottomElementCard);
};
