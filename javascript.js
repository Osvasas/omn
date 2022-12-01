let totalAmount = "total";

const lavadora = 51.5;
const cama = 37;
const bocina = 11.5;

/* const showResult = function () {
  window.alert(`Lavadora ${((lavadora / 100) * totalAmount).toFixed(2)}`);
  window.alert(`Cama ${((cama / 100) * totalAmount).toFixed(2)}`);
  window.alert(`bocina ${((11.5 / 100) * totalAmount).toFixed(2)}`);
};
 */

const total = document.querySelector(".total");

const buttonLav = document.querySelector(".btn-lav");
const lavResult = document.querySelector(".result-lav");

const buttonCam = document.querySelector(".btn-cam");
const camResult = document.querySelector(".result-cam");

const buttonBoc = document.querySelector(".btn-boc");
const bocResult = document.querySelector(".result-boc");

//handler

buttonLav.addEventListener("click", function () {
  lavResult.textContent = ((lavadora / 100) * total.value).toFixed(2);
});

buttonCam.addEventListener("click", function () {
  camResult.textContent = `${((cama / 100) * total.value).toFixed(
    2
  )}  cada uno ${((cama / 100) * total.value).toFixed(2) / 2}`;
});

buttonBoc.addEventListener("click", function () {
  bocResult.textContent = ((bocina / 100) * total.value).toFixed(2);
});
