const btn = document.querySelector("button");
const nav = document.querySelector("nav");
const p = document.querySelectorAll("p");

btn.addEventListener("click", () => {
  nav.classList.toggle("dropdown");
  p.forEach((p) => {
    p.classList.toggle("fade");
  });
});
