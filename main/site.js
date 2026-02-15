const searchButt = document.querySelector(".search_butt");
const searchInput = document.querySelector(".search_input");
const addCard = document.querySelector(".add_card");
const wrapper = document.querySelector(".wrapper");

addCard.addEventListener('click', function() {
    search()
})

function search() {

}

function add() {
      let rectange = document.createElement('rectangle')
        li.innerHTML = todoInput.value
         teaBox.appendChild(rectange)
}

function download(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        let img = document.createElement("img");
        wrapper.appendChild(img);
        img.src = reader.result;
    }

}
