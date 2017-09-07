var linkMap = document.querySelector(".about-us__map_link");
var popupMap = document.querySelector(".modal-map");

var link = document.querySelector(".about-us__link-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal_close");
var storageAuthor = localStorage.getItem("author");
var storageMail = localStorage.getItem("inputMail");

var linkCart = document.querySelectorAll(".catalog__link-buy");
var popupAddCart = document.querySelector(".modal-add-cart");


if (linkMap && popupMap) {
  var closeMap = popupMap.querySelector(".modal_close");
  linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal_show");
  });
  closeMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.remove("modal_show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal_show")) {
        popupMap.classList.remove("modal_show");
      }
    }
  });
}

if (link && popup && close) {
  var form = document.querySelector(".write-us__form");
  var author = document.querySelector(".write-us__input-name");
  var inputMail= document.querySelector(".write-us__input-email");
  var inputMessage = document.querySelector(".write-us__input-message");

  link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal_show");
    if (storageAuthor && storageMail) {
      author.value = storageAuthor;
      inputMail.value = storageMail;
      inputMessage.focus();
    } else {
      author.focus();
    }
  });
  close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal_show");
    popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function(evt) {
    if (!author.value || !inputMail.value || !inputMessage.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("author", author.value);
      localStorage.setItem("inputMail", inputMail.value);
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal_show")) {
        popup.classList.remove("modal_show");
        popup.classList.remove("modal-error");
      }
    }
  });
}

if (linkCart && popupAddCart) {
  var closeAddCart = popupAddCart.querySelector(".modal_close");
  var linkBack = popupAddCart.querySelector(".modal-add-cart__link-back");
  for (var i = 0; i < linkCart.length; i++) {
    linkCart[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popupAddCart.classList.add("modal_show");
    });
  }
  closeAddCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupAddCart.classList.remove("modal_show");
  });
  linkBack.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupAddCart.classList.remove("modal_show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupAddCart.classList.contains("modal_show")) {
        popupAddCart.classList.remove("modal_show");
      }
    }
  });
}


