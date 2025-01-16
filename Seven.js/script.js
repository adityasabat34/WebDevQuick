let arr = [
  {
    dp: "https://images.unsplash.com/photo-1595326947594-d0074652a181?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1589785148112-83debe32a7ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1592677484740-4c40a559fce3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1535657823029-0fe64c7b8efb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1594886761101-49c80b0c57a0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1594739033447-80ab21e24b4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1595001248704-9de86edc4e8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1573095687464-4ac389cac26b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0aWZ1bCUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://media.istockphoto.com/id/1227440432/photo/bride-waiting-for-the-big-moment-young-bride-in-beautiful-dress-holding-bouquet-of-flowers.webp?a=1&s=612x612&w=0&k=20&c=EKOyMGBPXXIAb0c_nQXvJgzJkJDU1E1FlSQT1zpZmmk=",
    story:
      "https://images.unsplash.com/photo-1599142296733-1c1f2073e6de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
];

let allStories = "";
arr.forEach((elem, idx) => {
  allStories += `  <div class="story">
          <img id="${idx}"src="${elem.dp}" alt="" />
        </div>`;
});

document.querySelector("#storiyan").innerHTML = allStories;
