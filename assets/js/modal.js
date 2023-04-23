`use strict`;

//Modal Window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

if(btnsOpenModal){
   if(window.localStorage.getItem("user")){
      let user = JSON.parse(window.localStorage.getItem("user"));
      if(user && user.length > 0)
        btnsOpenModal[0].innerText = `${user[0].fullname}'s Progress`;
   } 
}

for (let i = 0; i <= btnsOpenModal.length - 1; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    if (!modal.classList.contains("hidden")) closeModal();
  }
});

var startTime = Date.now();

setInterval(function () {
  var currentTime = Date.now() - startTime;
  var hours = Math.floor(currentTime / 3600000);
  var minutes = Math.floor((currentTime % 3600000) / 60000);
  var seconds = Math.floor((currentTime % 60000) / 1000);
  document.getElementById("timer").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}, 1000);

const myElement = document.querySelector(".my-class");
const counterBtn = document.getElementById("counter-btn");
const displayElement = document.getElementById("class-display");
let count = 0;

counterBtn.addEventListener("click", () => {
  count++;
  const classList = myElement.classList.toString();
  displayElement.textContent = `${count}`;
});