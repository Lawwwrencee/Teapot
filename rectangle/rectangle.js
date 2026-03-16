//const inputs = document.querySelectorAll(".input1, .input2, .input3, .input4, .input5, .input6, .input7, .input8, .input9, .input10, .input11")
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");


const text = localStorage.getItem("inputValue") || "";

input1.addEventListener("input", (e) => {
  localStorage.setItem("inputValue", e.target.value);
});

input1.value = text;

input2.addEventListener("input", (e) => {
  localStorage.setItem("inputValue", e.target.value);
});

input2.value = text;

input3.addEventListener("input", (e) => {
  localStorage.setItem("inputValue", e.target.value);
});

input3.value = text;

/*inputs.addEventListener("input", (e) => {
localStorage.setItem("inputValue", e.target.value);
});

inputs.value = text;*/
