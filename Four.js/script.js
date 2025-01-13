let con = document.querySelector(".container");
// console.log(con);
let heart = document.querySelector("i");
// console.log(heart);

con.addEventListener("dblclick", () => {
  //   console.log("clicked");
  heart.style.transform = " translate(-50%, -50%) scale(1)";
  heart.style.opacity = 1;
  heart.style.transition = "transform ease-in-out 0.3s";
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
    // heart.style.transition = "transform ease 0.0s";
    heart.style.opacity = 0.4;
  }, 1000);
});
