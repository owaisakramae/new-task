$(document).ready(function () {
  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

var swiper = new Swiper(".content", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

$("input").focus(function () {
  $(this).parents(".form-group").addClass("focused");
});

$("input").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".form-group").removeClass("focused");
  } else {
    $(this).addClass("filled");
  }
});
