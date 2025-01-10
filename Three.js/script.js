let isStatus = document.querySelector("h5");
let btn = document.querySelector(".add");
let statusCheck = 0;

btn.addEventListener("click", () => {
  if (statusCheck === 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove";
    // btn.style.backgroundColor = "roy";
    statusCheck = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friends";
    // btn.style.backgroundColor = "grey";
    statusCheck = 0;
  }
});
