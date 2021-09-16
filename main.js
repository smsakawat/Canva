// Intereactive part
const mainImg = document.getElementById("show-img");
const artOne = document.getElementById("art-one");
const artTwo = document.getElementById("art-two");
const artThree = document.getElementById("art-three");
const details = document.getElementById("details");
let artCost = document.getElementById("art-amount");
const free = document.getElementById("free-btn");
const express = document.getElementById("express-btn");
const shippingCost = document.getElementById("shipping-charge");
// free and express
free.addEventListener("click", function () {
  shippingCost.innerText = "5";
  grandTotal();
});
express.addEventListener("click", function () {
  shippingCost.innerText = "40";
  grandTotal();
});
// options part
artOne.addEventListener("click", function () {
  mainImg.src = "images/1.jpg";
  details.innerText =
    "Dicta adipisci alias rem placeat vel? Voluptates, dolores et nostrum ad fuga nulla est? Corrupti!Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  artCost.innerText = "720";
  grandTotal();
});
artTwo.addEventListener("click", function () {
  mainImg.src = "images/2.jpg";
  details.innerText =
    "Consectetur ratione ut similique, non, nulla explicabo nisi assumenda ipsa ab soluta repellendus? Dolore eos atque, quia architecto amet quod laborum perspiciatis. ";
  artCost.innerText = "535";
  grandTotal();
});
artThree.addEventListener("click", function () {
  mainImg.src = "images/3.jpg";
  details.innerText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero repudiandae eveniet ad fugiat! Recusandae expedita autem totam illo iusto.";
  artCost.innerText = "490";
  grandTotal();
});
// update grand total
function grandTotal() {
  const artAmount = parseInt(artCost.innerText);
  const shippingAmount = parseInt(shippingCost.innerText);
  const total = document.getElementById("grand-total");
  const mainTotal = artAmount + shippingAmount;
  total.innerText = mainTotal;
}
