const searchButt = document.querySelector(".search_butt");
const searchInput = document.querySelector(".search_input");
let wrapper = document.querySelector(".wrapper");

searchButt.addEventListener('click', function() {
    addAny()
})

function addAny() {
    if (searchInput.value === "") {
        alert("meow..?")
    }
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

console.log(wrapper);