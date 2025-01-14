let main = document.querySelector("#main");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", (e) => {
  //   console.log(e.y);
  let left = (crsr.style.left = e.x + "px");
  console.log(left);
  crsr.style.top = e.y + "px";
});
