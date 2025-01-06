let h1 = document.querySelector("h1");
// console.log(h1);

h1.innerHTML = "<h2>Hi Mooon</h2>";
h1.style.backgroundColor = "green";

h1.addEventListener("dblclick", () => {
  h1.innerHTML = "DOM Manipulation";
  h1.style.backgroundColor = "black";
  h1.style.color = "purple";
  h1.style.textAlign = "center";
});

let div = document.querySelector("div");
div.addEventListener("click", function () {
  div.style.backgroundColor = "purple";
  div.innerHTML = "hii";
  div.style.textAlign = "center";
  div.style.color = "yellow";
});
