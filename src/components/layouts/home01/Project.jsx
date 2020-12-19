import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../CONST";
import Swiper from "swiper/bundle";

const Project = ({ categories }) => {
  useEffect(() => {
    var swiper = new Swiper("#projects-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowSlideNext: true,
      allowSlidePrev: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
  }, [categories]);

  return (
    <div
      className="themesflat-carousel-box clearfix"
      data-gap={30}
      data-column={4}
      data-column2={2}
      data-column3={1}
      data-auto="false"
    >
      <div className="position-relative py-5">
        <div class="swiper-button-prev z-100"></div>
        <div
          class="swiper-container"
          id="projects-swiper"
          style={{
            width: "94%",
            height: "200px",
          }}
        >
          <div class="swiper-wrapper">
            {categories.map((data) => (
              <div className="swiper-slide" key={data.id}>
                <div className="project-item h-100">
                  <div className="inner h-100">
                    <div className="thumb data-effect-item has-effect-icon w40 text-center h-100">
                      <img
                        src={`${API}${data.pic}`}
                        alt="altimage"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

                      <div className="elm-link">
                        {/* <Link to="#" className="icon-1 icon-search"></Link> */}
                        <Link
                          to={`/category/${data.id}`}
                          onClick={() => {
                            window.location.href = `category/${data.id}`;
                          }}
                          className="icon-1 icon-search"
                        ></Link>

                        <h5 className="heading mt-3">
                          <Link
                            to={`/category/${data.id}`}
                            onClick={() => {
                              window.location.href = `category/${data.id}`;
                            }}
                          >
                            {data.name}
                          </Link>
                        </h5>
                      </div>
                      <div className="overlay-effect bg-color-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  );
};

// class Project extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: 1,
//           srcimg: "assets/img/project/project-1-440x280.jpg",
//           heading: "Resorts and Hotels",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 2,
//           srcimg: "assets/img/project/project-2-440x280.jpg",
//           heading: "Environmental Projects",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 3,
//           srcimg: "assets/img/project/project-3-440x280.jpg",
//           heading: "Civic and Commercial",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 4,
//           srcimg: "assets/img/project/project-4-440x280.jpg",
//           heading: "Gas Stations",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 5,
//           srcimg: "assets/img/project/project-1-440x280.jpg",
//           heading: "Hospitality",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 6,
//           srcimg: "assets/img/project/project-2-440x280.jpg",
//           heading: "Industrial Projects",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 7,
//           srcimg: "assets/img/project/project-3-440x280.jpg",
//           heading: "Administrative Projects",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 8,
//           srcimg: "assets/img/project/project-4-440x280.jpg",
//           heading: "Mixed-Use Projects",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 9,
//           srcimg: "assets/img/project/project-4-440x280.jpg",
//           heading: "Competitions",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 10,
//           srcimg: "assets/img/project/project-4-440x280.jpg",
//           heading: "Residential Projects",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 11,
//           srcimg: "assets/img/project/project-4-440x280.jpg",
//           heading: "Design-Build Projects",
//           meta: "Architecture",
//           text: "Building",
//         },
//         {
//           id: 12,
//           srcimg: "assets/img/project/project-4-440x280.jpg",
//           heading: "Construction Details",
//           meta: "Architecture",
//           text: "Building",
//         },
//       ],
//     };
//   }
//   render() {}
// }

export default Project;
