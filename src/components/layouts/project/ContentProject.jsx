import React, { Component, useEffect } from "react";
import Swiper from "swiper/bundle";
import { API } from "../../../CONST";

const ContentProject = ({ category }) => {
  console.log(category.project.picsArr);
  // init Swiper:
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    loop: true,
    // autoHeight: true,
    speed: "6000ms",
    grabCursor: true,
    autoplay: true,

    allowSlideNext: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 40,
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  return (
    <div className="detail-gallery">
      <div
        className="themesflat-spacer clearfix"
        data-desktop={21}
        data-mobile={21}
        data-smobile={21}
      />
      <div className="">
        <div class="swiper-container gallery-top">
          <div class="swiper-wrapper">
            {category.project.picsArr.map((i) => (
              <div
                class="swiper-slide"
                key={i}
                style={{
                  backgroundImage: `url("${API}${i}")`,
                  height: "100%",
                }}
              ></div>
            ))}
          </div>
          <div class="swiper-button-next swiper-button-white"></div>
          <div class="swiper-button-prev swiper-button-white"></div>
        </div>
        <div class="swiper-container gallery-thumbs">
          <div class="swiper-wrapper">
            {category.project.picsArr.map((i) => (
              <div
                class="swiper-slide"
                key={i}
                style={{
                  backgroundImage: `url("${API}${i}")`,

                  // width: "100%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* /.themesflat-cousel-box */}
      <div
        className="themesflat-spacer clearfix"
        data-desktop={40}
        data-mobile={40}
        data-smobile={40}
      />
      <div className="flat-content-wrap style-3 clearfix">
        <h5 className="title">Scope of work</h5>
        <div className="sep has-width w60 accent-bg margin-top-18 clearfix" />
        {category.project.scopeOfWork.map((i) => (
          <p key={i} className="margin-top-28">
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContentProject;
