import $ from "jquery";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./css/main.scss";

// ----- Libs -----

// ----- ekko -----
import "./js/libs/ekko-lightbox.min.js";

// ----- -----

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(".port-item").click(() => {
  $(".collapse").collapse("hide");
});
