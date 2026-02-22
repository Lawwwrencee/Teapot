const searchButt = document.querySelector(".search_butt");
const searchInput = document.querySelector(".search_input");
const wrapper = document.querySelector(".wrapper");
const teaBox = document.querySelector(".tea_box");
const imgInput = document.querySelector(".imgInput");

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

var rectangle = $('.rectangle')[0].outerHTML;
$('.add_card').click(function(){
  $rectangle = $(rectangle);
  $rectangle.appendTo($('.tea_box'))
});

/*$(function(){
    $("div.add_card").click(function(){
        $(this).parent(teaBox).append( $(".rectangle").parent(teaBox).clone(false) );
    });
});*/
