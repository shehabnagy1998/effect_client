import React, { useEffect, useState } from "react";
import {
  Slider,
  TitleHeading,
  IconBox,
  About,
  Project,
  Testimonial,
} from "../layouts/home01/index";
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index";
import Axios from "axios";
import { API } from "../../CONST";
import { startApp } from "../../CONST";

const Home01 = () => {
  const [defaultState] = useState({
    headers: [
      {
        id: 1,
        logoweb: "/assets/img/logo-small.png",
        names: "Home",
      },
    ],
    headingchoose: [
      {
        id: 1,
        classnames: "heading",
        title: "OUR SERVICES",
        text: "",
        classtext: "sub-heading",
      },
    ],
    headingservice: [
      {
        id: 1,
        classnames: "heading",
        title: "BEST SERVICES 1",
        text:
          "Construction Services offers a full range of construction services from initial design to project completion.",
        classtext: "sub-heading",
      },
    ],
    headingproject: [
      {
        id: 1,
        classnames: "heading text-white",
        title: "PROJECT EXPERIANCE",
        classtext: "sub-heading",
      },
    ],
    servicebox: [
      {
        id: 1,
        classnames: "heading font-size-30",
        title: "ALL SERVICES",
        classtext: "sub-heading font-weight-400",
        text:
          "Are you interested in finding out how we can make your project a success? Please constact us.",
      },
    ],
  });
  const [categories, setCategories] = useState([]);
  const fetcher = async (baseURL = API) => {
    const res = await Axios({
      baseURL,
      url: "/api/categories",
      method: "GET",
    });
    setCategories(res.data);
  };
  useEffect(() => {
    fetcher();
    startApp();
  }, []);

  useEffect(() => {
    let reloaded = localStorage.getItem("ifRloaded");
    if (reloaded === "false") {
      localStorage.setItem("ifRloaded", true);
      window.location.reload();
    } else {
      localStorage.setItem("ifRloaded", false);
    }
  }, []);

  return (
    <div className="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
      <TopBar />
      {defaultState.headers.map((data, idx) => (
        <Header data={data} key={idx} />
      ))}
      <div className="page-content">
        <div
          id="home-section"
          className="rev_slider_wrapper fullwidthbanner-container"
        >
          <div id="rev-slider1" className="rev_slider fullwidthabanner">
            <Slider />
          </div>
        </div>
        <div className="row-iconbox py-5" id="services-section">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                {defaultState.headingchoose.map((data) => (
                  <TitleHeading data={data} key={data.id} />
                ))}
              </div>
            </div>

            <IconBox />
          </div>
        </div>
        <About />
        <div
          className="row-project parallax parallax-1 parallax-overlay "
          id="projects-section"
        >
          <div className="project-overlay">
            <div className="container-fluid py-5">
              <div className="row py-5">
                <div className="col-md-12">
                  {defaultState.headingproject.map((data) => (
                    <TitleHeading data={data} key={data.id} />
                  ))}

                  <Project categories={categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
        <div className="row-quote bg-row-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="themesflat-quote style-1 clearfix py-5">
                  <div className="quote-item">
                    <div className="inner">
                      <div className="heading-wrap">
                        <h3 className="heading">
                          START EXECUTING YOUR PROJECT
                        </h3>
                      </div>
                      <div className="button-wrap has-icon icon-left">
                        <button className="themesflat-button bg-white small">
                          <span>
                            (+20) 122 220 0079{" "}
                            <span className="icon">
                              <i className="autora-icon-phone-contact" />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Partner /> */}
        <Footer />
        {defaultState.headers.map((data, idx) => (
          <BottomBar data={data} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Home01;
