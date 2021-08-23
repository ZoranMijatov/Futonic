$(document).ready(function () {
  /* Header on scroll style change function */

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  /* Hamburger drop-down menu toggle */

  $(".header__menu").click(function () {
    $(this).toggleClass("hamburger");
    $(".meni").toggleClass("aktiviraj");
  });

  /* Two accordions on the single product page */

  $(".single-product__content-wrap-bottom-accordion").click(function () {
    $(".single-product__content-wrap-bottom-accordion-dropdown").toggleClass(
      "drop"
    );
  });

  $(".single-product__content-wrap-bottom-accordion-two").click(function () {
    $(
      ".single-product__content-wrap-bottom-accordion-dropdown-two"
    ).toggleClass("drop");
  });

  /* Quantity increment and decrement function on cart page */

  function wcqib_refresh_quantity_increments() {
    jQuery(
      "div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)"
    ).each(function (a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"),
        c
          .children()
          .first()
          .before('<input type="button" value="-" class="minus" />'),
        c
          .children()
          .last()
          .after('<input type="button" value="+" class="plus" />');
    });
  }
  String.prototype.getDecimals ||
    (String.prototype.getDecimals = function () {
      var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
    }),
    jQuery(document).ready(function () {
      wcqib_refresh_quantity_increments();
    }),
    jQuery(document).on("updated_wc_div", function () {
      wcqib_refresh_quantity_increments();
    }),
    jQuery(document).on("click", ".plus, .minus", function () {
      var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
      (b && "" !== b && "NaN" !== b) || (b = 0),
        ("" !== c && "NaN" !== c) || (c = ""),
        ("" !== d && "NaN" !== d) || (d = 0),
        ("any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e)) ||
          (e = 1),
        jQuery(this).is(".plus")
          ? c && b >= c
            ? a.val(c)
            : a.val((b + parseFloat(e)).toFixed(e.getDecimals()))
          : d && b <= d
          ? a.val(d)
          : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())),
        a.trigger("change");
    });

  /* Star rating function to fill star-svg on single product page */

  function starColor(starsClicked) {
    for (let i = 1; i <= 5; i++) {
      if (i <= starsClicked) {
        $("path, polygon, circle", ".star-" + i).attr("fill", "#FFD700");
      } else {
        $("path, polygon, circle", ".star-" + i).attr("fill", "222");
      }
    }
  }

  $(".star").click(function () {
    const starsClicked = $(this).data("stars-clicked");
    console.log(starsClicked);
    starColor(starsClicked);
  });

  /* Black overlay upon filter click */

  $(".mobile__filter__accordion").click(function () {
    $(".products__filter-mobile").toggleClass("popup");
    $(".mobile-body-overlay").toggle();
  });
  
  $(".mobile-sort-by").click(function () {
    $(".mobile-sort-by__radio").toggleClass("popup");
    $(".mobile-body-overlay").toggle();
  });

  /* Basic accordion */

  $(".products__wrapper__sort-by").click(function () {
    $(".products__wrapper__sort-by-dropdown").toggleClass("extend");
  });

  /* Select 2 */

  $('.products__wrapper__sort-by-select2').select2();

});
