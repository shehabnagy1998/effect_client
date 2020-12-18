import * as $ from "jquery";

export const API = "https://effect-backend.vercel.app";

export var themesflatTheme = {
  // PreLoader
  preLoader: function () {
    if ($().animsition) {
      $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        loading: true,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [
          "-webkit-animation-duration",
          "-moz-animation-duration",
          "animation-duration",
        ],
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function (url) {
          window.location.href = url;
        },
      });
    }
  },

  // Retina Logos
  retinaLogo: function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    var $logo = $("#site-logo img");
    var $logo_retina = $logo.data("retina");

    if (retina && $logo_retina) {
      $logo.attr({
        src: $logo.data("retina"),
        width: $logo.data("width"),
        height: $logo.data("height"),
      });
    }
  },

  // Header Fixed
  headerFixed: function () {
    if ($("div").hasClass("header-fixed")) {
      var nav = $("#site-header");

      if ($("div").is(".header-style-8")) {
        var nav = $(".site-navigation-wrap");
      }

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div />", {
            height: headerHeight,
          }).insertAfter(nav);

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 300) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  },

  // Mobile Navigation
  mobileNav: function () {
    var menuType = "desktop";

    $(window).on("load resize", function () {
      var mode = "desktop";
      var wrapMenu = $("#site-header-inner .wrap-inner");
      var navExtw = $(".nav-extend.active");
      var navExt = $(".nav-extend.active").children();

      if (matchMedia("only screen and (max-width: 991px)").matches)
        mode = "mobile";

      if (mode != menuType) {
        menuType = mode;

        if (mode === "mobile") {
          $("#main-nav")
            .attr("id", "main-nav-mobi")
            .appendTo("#site-header")
            .hide()
            .children(".menu")
            .append(navExt)
            .find("li:has(ul)")
            .children("ul")
            .removeAttr("style")
            .hide()
            .before('<span class="arrow"></span>');
        } else {
          if ($("div").is(".header-style-3"))
            wrapMenu = $(".site-navigation-wrap .inner");

          $("#main-nav-mobi")
            .attr("id", "main-nav")
            .removeAttr("style")
            .prependTo(wrapMenu)
            .find(".ext")
            .appendTo(navExtw)
            .parent()
            .siblings("#main-nav")
            .find(".sub-menu")
            .removeAttr("style")
            .prev()
            .remove();

          $(".mobile-button").removeClass("active");
        }
      }
    });

    $(document).on("click", ".mobile-button", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });

    $(document).on("click", "#main-nav-mobi .arrow", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  },

  // Scroll to Top
  scrollToTop: function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $("#scroll-top").addClass("show");
      } else {
        $("#scroll-top").removeClass("show");
      }
    });

    $("#scroll-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  },
};

export const startApp = () => {
  // PreLoader
  themesflatTheme.preLoader();

  // Retina Logos
  themesflatTheme.retinaLogo();

  // Header Fixed
  themesflatTheme.headerFixed();

  // Mobile Navigation
  themesflatTheme.mobileNav();

  // Scroll to Top
  themesflatTheme.scrollToTop();
};
