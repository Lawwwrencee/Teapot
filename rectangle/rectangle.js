const input1 = document.querySelector(".input1")
const teaBox2 = document.querySelector(".tea_box2")

const text = localStorage.getItem("inputValue") || "";

input1.addEventListener("change", (e) => {
  console.log(e.target.value);
  localStorage.setItem("inputValue", e.target.value);
});