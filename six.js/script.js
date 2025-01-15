let allElem = document.querySelectorAll(".elem");
// console.log(allElem);

allElem.forEach((elem) => {
  //   console.log(elem.childNodes[3]);
  elem.addEventListener("mouseenter", (e) => {
    elem.childNodes[3].style.opacity = 1;
    // elem.childNodes[3].style.top = e.x;
  });

  elem.addEventListener("mouseleave", (e) => {
    elem.childNodes[3].style.opacity = 0;
  });

  elem.addEventListener("mousemove", (e) => {
    elem.childNodes[3].style.left = e.x + "px";
    elem.childNodes[3].style.top = e.y + "px";
  });
});
