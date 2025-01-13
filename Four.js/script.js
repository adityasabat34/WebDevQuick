let con = document.querySelector(".container");
// console.log(con);
let heart = document.querySelector("i");
// console.log(heart);

con.addEventListener("dblclick", () => {
  //   console.log("clicked");
  heart.style.transform = " translate(-50%, -50%) scale(1)";
  heart.style.opacity = 1;
  heart.style.transition = "transform ease 0.5s";
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
    heart.style.transition = "transform ease 0.0s";
  }, 1000);
});
