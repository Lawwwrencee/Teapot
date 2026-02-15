const input1 = document.querySelector(".input1")
const teaBox2 = document.querySelector(".tea_box2")

function saveInput() {
    if(input1.value ) {
        saveData()
    }
}

function saveData() {
    localStorage.setItem('data', teaBox2.innerHTML)
};

function showData() {
    teaBox2.innerHTML = localStorage.getItem('data')
};

showData();