import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inner: [
        {
          id: 1,
          icon: "fa fa-check-square",
          text: "Completing projects on time & Following budget guidelines",
        },
        {
          id: 2,
          icon: "fa fa-check-square",
          text: "Elevated quality of workmanship",
        },
        {
          id: 3,
          icon: "fa fa-check-square",
          text: "Meeting diverse supplier requirements",
        },
        {
          id: 4,
          icon: "fa fa-check-square",
          text: "Implementing appropriate safety precautions and procedures",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-about" id="about-section">
        <div className="container-fluid">
          <div className="row equalize sm-equalize-auto">
            <div className="col-md-6 half-background style-1" />
            <div className="col-md-6 bg-light-grey">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={64}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-content-box clearfix"
                data-margin="0 25% 0 4.5%"
                data-mobilemargin="0 0 0 4.5%"
              >
                <div className="themesflat-headings style-1 clearfix">
                  <h2 className="heading">WELCOME TO EFFECT</h2>
                  <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
                  <p className="sub-heading margin-top-30">
                    We focus on ensuring efficient Architectural environment and
                    life style that meets the client Expectations, Effect based
                    in Cairo. Over the past decade We Provides creative
                    solutions, efficient Designs and Constructions Supervision
                    to make Innovative plans came to life
                  </p>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={26}
                  data-mobile={35}
                  data-smobile={35}
                />
                <div className="content-list">
                  <div className="themesflat-list has-icon style-1 icon-left clearfix">
                    {/* <div className="inner">
                      {this.state.inner.map((data) => (
                        <span className="item" key={data.id}>
                          <span className="icon">
                            <i className={data.icon} />
                          </span>
                          <span className="text">{data.text}</span>
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={42}
                  data-mobile={35}
                  data-smobile={35}
                />
                {/* <div className="elm-button">
                  <Link to="#" className="themesflat-button bg-white">
                    GET IN TOUCH
                  </Link>
                </div> */}
              </div>
              {/* <div
                className="themesflat-spacer clearfix"
                data-desktop={75}
                data-mobile={60}
                data-smobile={60}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
