import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import menus from "../menu";
import Scrollspy from "react-scrollspy";

class BottomBar extends Component {
  render() {
    return (
      <div id="bottom" className="clearfix has-spacer">
        <div id="bottom-bar-inner" className="container">
          <div className="bottom-bar-inner-wrap">
            <div className="bottom-bar-content">
              <div id="copyright">
                ©{" "}
                <span className="text">
                  Effect Consultancy ©{" "}
                  <Link to="#" className="text-accent">
                    {new Date().getFullYear()}
                  </Link>{" "}
                </span>
              </div>
            </div>
            {/* /.bottom-bar-content */}
            <div className="bottom-bar-menu">
              <Scrollspy
                id="menu-primary-menu"
                className="bottom-nav"
                items={[
                  "home-section",
                  "services-section",
                  "about-section",
                  "projects-section",
                  "characteristics-section",
                ]}
                currentClassName="current-menu-item "
              >
                {menus.map((data) => (
                  <li className={"menu-item"} key={data.id}>
                    <a href={`#${data.target}`}>{data.name}</a>
                  </li>
                ))}
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BottomBar);
