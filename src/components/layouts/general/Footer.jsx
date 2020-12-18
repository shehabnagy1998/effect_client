import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="clearfix py-5">
        <div id="footer-widgets" className="container py-3">
          <div className="row">
            <div className="col-md-6">
              <div className="widget widget_text">
                <div className="textwidget">
                  <p>
                    <img
                      src="/assets/img/logo-white@2x.png"
                      alt="imagealt"
                      width={170}
                      height={34}
                    />
                  </p>
                  <p className="margin-bottom-5">Master Planning</p>
                  <p className="margin-bottom-5">Infrastructure</p>
                  <p className="margin-bottom-5">Architectural Design</p>
                  <p className="margin-bottom-5">Interior Design</p>
                  <p className="margin-bottom-5">Landscape Design</p>
                </div>
              </div>
              {/* /.widget_text */}
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
            </div>
            <div className="col-md-6">
              <div className="widget widget_text">
                <div className="textwidget">
                  <ul>
                    <li>
                      <div className="inner">
                        <span className="fa fa-map-marker" />
                        <span className="text">
                          Cairo, Egypt,{" "}
                          <span className="sl">
                            {" "}
                            21 el obour buildings, Salah Salem St. 12th Floor
                          </span>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <span className="fa fa-phone" />
                        <span className="text">+201222200079</span> {", "}
                        <span className="text">+2024045585</span>
                      </div>
                    </li>

                    <li className="margin-top-7">
                      <div className="inner">
                        <span className=" font-size-14 fa fa-envelope" />
                        <span className="text">office@effectegy.com</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.widget_text */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
