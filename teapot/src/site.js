const wrapper = document.querySelector(".wrapper");
const teaBox = document.querySelector(".tea_box");
const imgInputs = document.querySelectorAll(".imgInput");
const addCardBtn = document.querySelector(".add_card");
const teaContainer = document.querySelector(".tea_container");

const teaName = document.querySelector(".rec_input");

const text = localStorage.getItem("inputValue") || "";
teaName.value = text;

teaName.addEventListener("change", (e) => {
  localStorage.setItem("inputValue", e.target.value);
});

const myTea = JSON.parse(localStorage.getItem("myTea")) || [];

const renderTea = () => {
  teaContainer.innerHTML = "";
  myTea.forEach((el, index) => {
    const newRectangle = document.createElement("div");
    newRectangle.classList.add("rectangle");

    const newLabel = document.createElement("label");
    const imgInput = document.createElement("input");
    const wrapperDiv = document.createElement("div");
    const teaNameInput = document.createElement("input");
    teaNameInput.classList.add("rec_input");
    teaNameInput.placeholder = "Название чая";
    teaNameInput.value = el.name;
    
    teaNameInput.addEventListener("change", (e) => {
      myTea[index].name = e.target.value;
      localStorage.setItem("myTea", JSON.stringify(myTea));
    });
    
    wrapperDiv.classList.add("wrapper");
    imgInput.type = "file";
    imgInput.classList.add("imgInput");
    imgInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        let img = document.createElement("img");
        wrapperDiv.appendChild(img);
        img.src = reader.result;                
        myTea[index].img = reader.result;
        localStorage.setItem("myTea", JSON.stringify(myTea));
      };
    });
    newLabel.appendChild(imgInput);
    const line1 = document.createElement("span");
    line1.classList.add("line1");
    newLabel.append(line1);
    const line2 = document.createElement("span");
    line2.classList.add("line2");
    newLabel.append(line2);
    newRectangle.appendChild(wrapperDiv);
    newRectangle.appendChild(teaNameInput);
    newRectangle.appendChild(newLabel);
    const newButton = document.createElement("new_window");
    newRectangle.appendChild(newButton);
    teaContainer.append(newRectangle);
    if (el.img) {
      let img = document.createElement("img");
      wrapperDiv.appendChild(img);
      img.src = el.img;
    }
  });
};

imgInputs.forEach((e) => {
  e.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      let img = document.createElement("img");
      img.classList.add('teaImg');
      wrapper.appendChild(img);
      img.src = reader.result;
    };
  });
});

addCardBtn.addEventListener("click", () => {
  myTea.push({
    name: "",
    img: null,
  });
  renderTea();
  localStorage.setItem("myTea", JSON.stringify(myTea));
});
renderTea();


