import React, { Component } from "react";
import { Link } from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          srcimg: "assets/img/project/project-1-440x280.jpg",
          heading: "Resorts and Hotels",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 2,
          srcimg: "assets/img/project/project-2-440x280.jpg",
          heading: "Environmental Projects",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 3,
          srcimg: "assets/img/project/project-3-440x280.jpg",
          heading: "Civic and Commercial",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 4,
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "Gas Stations",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 5,
          srcimg: "assets/img/project/project-1-440x280.jpg",
          heading: "Hospitality",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 6,
          srcimg: "assets/img/project/project-2-440x280.jpg",
          heading: "Industrial Projects",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 7,
          srcimg: "assets/img/project/project-3-440x280.jpg",
          heading: "Administrative Projects",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 8,
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "Mixed-Use Projects",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 9,
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "Competitions",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 10,
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "Residential Projects",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 11,
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "Design-Build Projects",
          meta: "Architecture",
          text: "Building",
        },
        {
          id: 12,
          srcimg: "assets/img/project/project-4-440x280.jpg",
          heading: "Construction Details",
          meta: "Architecture",
          text: "Building",
        },
      ],
    };
  }
  render() {
    return (
      <div
        className="themesflat-carousel-box clearfix"
        data-gap={30}
        data-column={4}
        data-column2={2}
        data-column3={1}
        data-auto="false"
      >
        <div className="owl-carousel owl-theme">
          {this.state.data.map((data) => (
            <div
              className="themesflat-project style-1 data-effect  clearfix"
              key={data.id}
            >
              <div className="project-item">
                <div className="inner">
                  <div className="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46 text-center">
                    <img src={data.srcimg} alt="altimage" />
                    <div className="text-wrap text-center">
                      <h5 className="heading">
                        <Link to="#">{data.heading}</Link>
                      </h5>
                      {/* <div className="elm-meta">
                        <span>
                          <Link to="#">{data.meta}</Link>
                        </span>
                        <span>
                          <Link to="#">{data.text}</Link>
                        </span>
                      </div> */}
                    </div>
                    <div className="elm-link">
                      {/* <Link to="#" className="icon-1 icon-search"></Link> */}
                      <Link to="#" className="icon-1"></Link>
                    </div>
                    <div className="overlay-effect bg-color-3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
