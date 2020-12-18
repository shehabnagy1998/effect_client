import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API } from "../../CONST";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import Swiper from "swiper/bundle";

const ProjectDetail = () => {
  const [defaultState, setDefault] = useState({
    headers: [
      {
        id: 1,
        logoweb: "/assets/img/logo-small.png",
        names: "Projects",
      },
    ],
    banners: [
      {
        id: 1,
        links: "",
        titlelink: "",
        border: "|",
        name: "",
        heading: "",
      },
    ],
  });

  const { id, catId } = useParams();
  const [category, setCategory] = useState([]);
  const fetcher = async (baseURL = API) => {
    const res = await Axios({
      baseURL,
      url: `/api/projects/${catId}/${id}`,
      method: "GET",
    });
    console.log(res.data);
    setCategory(res.data);
    setDefault({
      ...defaultState,
      banners: [
        {
          id: 1,
          links: `/category/${res.data.id}`,
          titlelink: res.data.name,
          border: "|",
          name: res.data.project && res.data.project.name,
          heading: res.data.project && res.data.project.name,
        },
      ],
    });
  };
  useEffect(() => {
    fetcher();
  }, [id, catId]);

  useEffect(() => {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }, [category]);

  return (
    <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
      <TopBar />
      {defaultState.headers.map((data, idx) => (
        <Header data={data} key={idx} />
      ))}
      {defaultState.banners.map((data) => (
        <BannerTitle key={data.id} data={data} />
      ))}

      {category.project && (
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="themesflat-headings style-1 clearfix">
                <h2 className="heading line-height-62">
                  {category.project.name}
                </h2>
                <div className="sep has-width w80 accent-bg clearfix"></div>
              </div>

              <div className="d-flex flex-column mt-5">
                <div className="row mb-3">
                  <div className="col-5">
                    <i className="fa fa-tag mr-3"></i>{" "}
                    <span className="text">Category</span>
                  </div>
                  <div className="col-7">
                    <span className="text">{category.name}</span>
                  </div>
                </div>
                {category.project.location && (
                  <div className="row mb-3">
                    <div className="col-5">
                      <i className="fa fa-map-marker mr-3"></i>{" "}
                      <span className="text">Location</span>
                    </div>
                    <div className="col-7">
                      <span className="text">{category.project.location}</span>
                    </div>
                  </div>
                )}
                {category.project.client && (
                  <div className="row mb-3">
                    <div className="col-5">
                      <i className="fa fa-user mr-3"></i>{" "}
                      <span className="text">Client</span>
                    </div>
                    <div className="col-7">
                      <span className="text">{category.project.client}</span>
                    </div>
                  </div>
                )}
              </div>

              {category.project.scopeOfWork.length >= 1 && (
                <>
                  <div className="themesflat-headings style-3 clearfix">
                    <h4 className="heading line-height-62">Scope of work</h4>
                  </div>
                  <ul>
                    {category.project.scopeOfWork.map((i) => (
                      <li key={i} style={{ listStyle: "inside" }}>
                        {i}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="col-lg-9">
              <div className="position-relative">
                <div class="swiper-button-prev swiper-button-white"></div>
                <div
                  class="swiper-container gallery-top"
                  style={{ width: "90%" }}
                >
                  <div class="swiper-wrapper">
                    {category.project.picsArr.map((i, j) => (
                      <div class="swiper-slide" key={i.path}>
                        {i.type === "img" && (
                          <img
                            src={`${API}${i.path}`}
                            class="d-block w-100 h-auto"
                            style={{ height: "500px", objectFit: "cover" }}
                          />
                        )}
                        {i.type === "video" && (
                          <video
                            className="d-block w-100 h-auto"
                            src={`${API}${i.path}`}
                            style={{ height: "500px", objectFit: "cover" }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div class="swiper-button-next swiper-button-white"></div>
              </div>
              <div class="swiper-container gallery-thumbs p-3">
                <div class="swiper-wrapper">
                  {category.project.picsArr.map((i, j) => (
                    <div class="swiper-slide" key={i.path}>
                      {i.type === "img" && (
                        <img
                          src={`${API}${i.path}`}
                          style={{ height: "100px", objectFit: "cover" }}
                          class="d-block w-100"
                        />
                      )}
                      {i.type === "video" && (
                        <video
                          autoPlay={false}
                          className="d-block w-100"
                          src={`${API}${i.path}`}
                          style={{ height: "100px", objectFit: "cover" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
               
                <div class="carousel-inner">
                  {category.project.picsArr.map((i, j) => (
                    <div
                      class={`carousel-item ${j === 0 ? "active" : ""}`}
                      key={i.path}
                    >
                      {i.type === "img" && (
                        <img
                          src={`${API}${i.path}`}
                          class="d-block w-100 h-auto"
                        />
                      )}
                      {i.type === "video" && (
                        <video
                          className="d-block w-100 h-auto"
                          src={`${API}${i.path}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                      </div>*/}
            </div>
          </div>
        </div>
      )}
      <Footer />
      {defaultState.headers.map((data, idx) => (
        <BottomBar data={data} key={idx} />
      ))}
    </div>
  );
};

export default ProjectDetail;
