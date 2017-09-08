var link = document.querySelector(".about-us__link-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal_close");

if (link && popup && close) {
  var author = popup.querySelector("[name=name]");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_show");
    author.focus();
  })
}
