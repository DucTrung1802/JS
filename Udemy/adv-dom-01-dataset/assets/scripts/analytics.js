const intervalId = setInterval(() => {
  console.log("Sending analytics...");
}, 500);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
