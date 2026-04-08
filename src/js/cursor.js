const dot = document.getElementById("cur-dot");
const ring = document.getElementById("cur-ring");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});