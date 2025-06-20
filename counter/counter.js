let count = 0;
const countValue = document.getElementById("value");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

function updateDisplay() {
  countValue.textContent = count;
  if (count > 0) {
    countValue.style.color = "green";
  } else if (count < 0) {
    countValue.style.color = "red";
  } else {
    countValue.style.color = "#222";
  }
}
decreaseBtn.addEventListener("click", function () {
  count--;
  countValue.textContent = count;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});

increaseBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});
