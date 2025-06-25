const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const abortBtn = document.querySelector(".abort-btn");

let controller;

btn.addEventListener("click", function () {
  // Create a new controller for each batch of fetches
  controller = new AbortController();
  const signal = controller.signal;

  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();

    // Example: multiple fetches using the same signal
    for (let i = 0; i < 100; i++) {
      fetch("https://jsonplaceholder.typicode.com/posts", { signal })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched:", data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            console.error(err);
          }
        });
    }
  } else {
    btn.classList.remove("slide");
   
    video.play();
  }
});

// Abort button logic
abortBtn.addEventListener("click", function () {
  if (controller) {
    controller.abort();
    console.log("All fetches aborted by abort button.");
  }
});