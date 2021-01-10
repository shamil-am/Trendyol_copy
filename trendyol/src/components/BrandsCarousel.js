import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

//
import sanaOzel from "../images/carouselBrands/seninicin.png";
import sendeAl from "../images/carouselBrands/coksatanlar.png";
import oyunEglence from "../images/carouselBrands/WebOyuneglence_202012301841.jpeg";

const styles = {
  carouselHolder: {
    border: "2px solid red",
    '& div[style=width: "100%"]': {
      backgroundColor: "teal",
    },
    "& a": {
      display: "inline-block",
      textAlign: "center",
      height: "4.5rem",
      width: "4.5rem",
      textDecoration: "none",
      color: "#333",
      fontSize: ".75rem",
      fontWeight: "600",
      marginRight: "1.25rem",
      "& .imageHolder": {
        border: "1px solid #e6e6e6",
        borderRadius: "50%",
        "& img": {
          maxWidth: "100%",
        },
      },
    },
  },
};
//
class BrandsCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className={this.props.classes.carouselHolder}>
        <Slider {...settings}>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={sanaOzel} />
                </div>
                <div>
                  <span>Sana Ozel</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={sendeAl} />
                </div>
                <div>
                  <span>Sen de al</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={oyunEglence} />
                </div>
                <div>
                  <span>Oyun & Eglence</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={sanaOzel} />
                </div>
                <div>
                  <span>Sana Ozel</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={sanaOzel} />
                </div>
                <div>
                  <span>Sana Ozel</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(BrandsCarousel);
