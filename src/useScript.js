import React, { useEffect } from "react";
import * as $ from "jquery";

const useScript = () => {
  useEffect(() => {
    console.log("activating");
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    script.src = "/assets/js/owl.carousel.min.js";
    script2.src = "/assets/js/jquery.min.js";
    script.async = true;
    script2.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel();
    });

    return (_) => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);
};

export default useScript;
