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

// const bulb = document.querySelector(".bulb");
// const btn = document.querySelector(".btn");
// let toggleButton = false;

// btn.addEventListener("click", () => {
//   btn.innerHTML = "";
//   if (toggleButton === false) {
//     bulb.style.backgroundColor = "black";
//     let off = document.createElement("p");
//     off.innerHTML = "off";
//     btn.append(off);
//     // console.log("off");
//     toggleButton = true;
//   } else {
//     bulb.style.backgroundColor = "yellow";
//     let on = document.createElement("p");
//     on.innerHTML = "on";
//     btn.append(on);
//     toggleButton = false;
//     // console.log("on");
//   }
// });

// btn.addEventListener("click", () => {
//   if (btn.innerHTML.trim() === "off") {
//     bulb.style.backgroundColor = "black";
//     btn.innerHTML = "on";
//   } else {
//     bulb.style.backgroundColor = "yellow";
//     btn.innerHTML = "off";
//   }
// });
