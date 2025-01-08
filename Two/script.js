// let h1 = document.querySelector("h1");
// console.log(h1);
// let inner = document.querySelector(".inner");
// console.log(inner);

// h1.innerHTML = "<h2>Hi Mooon</h2>";
// h1.style.backgroundColor = "green";

// h1.addEventListener("dblclick", () => {
//   h1.innerHTML = "DOM Manipulation";
//   h1.style.backgroundColor = "black";
//   h1.style.color = "purple";
//   h1.style.textAlign = "center";
// });

// let div = document.querySelector("div");
// div.addEventListener("click", function () {
//   div.style.backgroundColor = "purple";

//   div.style.textAlign = "center";
//   div.style.color = "yellow";

// });

// let inner = document.querySelector(".inner");

// inner.addEventListener("click", (e) => {
//   e.stopPropagation();
//   inner.style.backgroundColor = "royalblue";
// });

const bulb = document.querySelector(".bulb");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // Check current text inside the button
  if (btn.innerHTML.trim() === "off") {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "on"; // Set the button text to "on"
  } else {
    bulb.style.backgroundColor = "black";
    btn.innerHTML = "off"; // Set the button text to "off"
  }
});
