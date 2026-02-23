const searchButt = document.querySelector(".search_butt");
const searchInput = document.querySelector(".search_input");
const wrapper = document.querySelector(".wrapper");
const teaBox = document.querySelector(".tea_box");
const imgInput = document.querySelector(".imgInput");
const addCardBtn = document.querySelector(".add_card");
const teaContainer = document.querySelector(".tea_container");

const text = localStorage.getItem("inputValue") || "";

searchInput.addEventListener("change", (e) => {
  //console.log(e.target.value);
  localStorage.setItem("inputValue", e.target.value);
});

searchInput.value = text;
imgInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    let img = document.createElement("img");
    wrapper.appendChild(img);
    img.src = reader.result;
  };
});

// const rectangle = Document(".rectangle")[0].outerHTML;

addCardBtn.addEventListener("click", () => {
  // console.log("123");
  const newRectangle = document.createElement("div");
  newRectangle.classList.add("rectangle");

  const newLabel = document.createElement("label");

  const imgInput = document.createElement("input");
  const wrapper = document.createElement("div");
  const teaNameInput = document.createElement("input");
  teaNameInput.classList.add("rec_input");
  teaNameInput.placeholder = "Название чая";
  wrapper.classList.add("wrapper");

  imgInput.type = "file";

  imgInput.classList.add("imgInput");
  imgInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      let img = document.createElement("img");
      wrapper.appendChild(img);
      img.src = reader.result;
    };
  });

  newLabel.appendChild(imgInput);
  const line1 = document.createElement("span");
  line1.classList.add("line1");
  newLabel.append(line1);

  const line2 = document.createElement("span");
  line2.classList.add("line2");
  newLabel.append(line2);

  newRectangle.appendChild(wrapper);
  newRectangle.appendChild(teaNameInput);
  newRectangle.appendChild(newLabel);

  teaContainer.append(newRectangle);
});
// $(".add_card").click(function () {
//   $rectangle = $(rectangle);
//   $rectangle.appendTo($(".tea_box"));
// });

/*$(function(){
    $("div.add_card").click(function(){
        $(this).parent(teaBox).append( $(".rectangle").parent(teaBox).clone(false) );
    });
});*/
