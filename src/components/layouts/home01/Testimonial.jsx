import React, { Component } from "react";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: [
        {
          id: 1,
          text:
            "“ To be a major party in providing efficient environment and the future life style ”",
          name: "OUR Vision",
        },
        {
          id: 2,
          text:
            "“ Effect is committed to produce a high quality design, engineering and Construction that are functional, comfortable and Creative to accommodate our client’s needs, enabling their dreams to come true ”",
          name: "OUR MISSION",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row-testimonials parallax-2" id="characteristics-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={80}
                data-mobile={60}
                data-smobile={60}
              />
              <div
                className="themesflat-carousel-box has-arrows arrow-center arrow-circle offset-v-24 clearfix"
                data-gap={30}
                data-column={1}
                data-column2={1}
                data-column3={1}
                data-auto="true"
              >
                <div className="owl-carousel owl-theme">
                  {this.state.testimonial.map((data) => (
                    <div
                      className="themesflat-testimonials style-1 max-width-70 align-center has-width w100 circle border-solid clearfix"
                      key={data.id}
                    >
                      <div className="testimonial-item">
                        <div className="inner">
                          <div className="icon-wrap">
                            <i className="fa fa-quote-left" />
                          </div>
                          <blockquote className="text">
                            <p>{data.text}</p>
                            <div className="sep has-width w80 accent-bg clearfix" />
                            <h6 className="name">{data.name}</h6>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={68}
                data-mobile={60}
                data-smobile={60}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
