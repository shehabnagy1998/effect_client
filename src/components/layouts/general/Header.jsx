import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import menus from "../menu";
import Scrollspy from "react-scrollspy";

class Header extends Component {
  render() {
    const { location } = this.props;
    return (
      <header id="site-header">
        <div id="site-header-inner" className="container">
          <div className="wrap-inner clearfix">
            <div id="site-logo" className="clearfix">
              <div id="site-log-inner">
                <Link
                  to="/"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  rel="home"
                  className="main-logo"
                >
                  <img
                    src={this.props.data.logoweb}
                    alt="Autora"
                    width={186}
                    height={39}
                    data-retina="assets/img/logo-small@2x.png"
                    data-width={186}
                    data-height={39}
                  />
                </Link>
              </div>
            </div>
            <div className="mobile-button">
              <span />
            </div>
            <nav id="main-nav" className="main-nav">
              <Scrollspy
                id="menu-primary-menu"
                className="menu"
                items={[
                  "home-section",
                  "services-section",
                  "about-section",
                  "projects-section",
                  "characteristics-section",
                ]}
                currentClassName="current-menu-item"
              >
                {/* <ul className="menu"> */}
                {menus.map((data) => (
                  <li
                    className={"menu-item menu-item-has-children"}
                    key={data.id}
                  >
                    <a href={`#${data.target}`}>{data.name}</a>
                    {/* <ul className="sub-menu">
                      {data.namesub.map((submenu) => (
                        <li
                          className={
                            location.pathname === submenu.links
                              ? "menu-item current-item"
                              : "menu-item"
                          }
                          key={submenu.id}
                        >
                          <Link
                            to={submenu.links}
                            onClick={() => {
                              window.location.href = submenu.links;
                            }}
                          >
                            {submenu.sub}
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  </li>
                ))}
                {/* </ul> */}
              </Scrollspy>
            </nav>
            <div id="header-search">
              <Link to="#" className="header-search-icon">
                <span className="search-icon fa fa-search"></span>
              </Link>
              <form
                role="search"
                method="get"
                className="header-search-form"
                action="#"
              >
                <label className="screen-reader-text">Search for:</label>
                <input
                  type="text"
                  defaultValue
                  name="s"
                  className="header-search-field"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="header-search-submit"
                  title="Search"
                >
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
