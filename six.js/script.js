let allElem = document.querySelector(".elem");
// console.log(allElem);
let elemImg = document.querySelector(".elem img");
// console.log(elemImg);

allElem.addEventListener("mousemove", (e) => {
  //   console.log(e);
  elemImg.style.left = e.x + "px";
  elemImg.style.top = e.y;
  //   elemImg.style.opacity = 1;
});

allElem.addEventListener("mouseleave", (e) => {
  // console.log()
  elemImg.style.opacity = 0;
});

allElem.addEventListener("mouseenter", (e) => {
  elemImg.style.opacity = 1;
});
