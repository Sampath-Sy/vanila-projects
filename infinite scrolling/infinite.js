const mainEle = document.getElementById("main");

const numberHeight = 30;
let lastNumber = 0;

function addNumbers(batchSize) {
  for (let i = 0; i < batchSize; i++) {
    lastNumber++;
    const div = document.createElement("div");
    div.textContent = lastNumber;
    div.style.height = 30 + "px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.fontSize = "20px";
    mainEle.appendChild(div);
  }
}

const mainHeight = mainEle.clientHeight || window.innerHeight;
const initialCount = Math.ceil(mainHeight / numberHeight);
addNumbers(initialCount);

window.addEventListener("scroll", function () {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 10
  ) {
    addNumbers(10);
  }
});
