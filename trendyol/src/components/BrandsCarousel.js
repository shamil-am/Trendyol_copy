import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

//
import sanaOzel from "../images/carouselBrands/seninicin.png";
import sendeAl from "../images/carouselBrands/coksatanlar.png";
import oyunEglence from "../images/carouselBrands/WebOyuneglence_202012301841.jpeg";
import koton from "../images/carouselBrands/koton.png";
import pullandbear from "../images/carouselBrands/pullBear.png";
import migros from "../images/carouselBrands/migros__brand__37266.png";
import trendyolman from "../images/carouselBrands/trendyolman__brand__15508.png";
import pierrecardin from "../images/carouselBrands/pierre-cardin__brand__121.png";
import defacto from "../images/carouselBrands/defacto__brand__3268.png";
import hummel from "../images/carouselBrands/hummel__brand__7770.png";
import derimod from "../images/carouselBrands/derimod__brand__35.png";
import hotic from "../images/carouselBrands/hotic.png";
import kotonkids from "../images/carouselBrands/kotonkids.png";
import lcwaikiki from "../images/carouselBrands/lcwaikiki.png";
import aquadipolo from "../images/carouselBrands/aquadipolo.png";
import lufian from "../images/carouselBrands/lufian.png";
import avva from "../images/carouselBrands/avva.jpg";
import dynamo from "../images/carouselBrands/dynamo.jpg";
import mavi from "../images/carouselBrands/mavi.png";
import adidas from "../images/carouselBrands/adidas_.png";
import mudo from "../images/carouselBrands/mudo.png";
import guess from "../images/carouselBrands/guess.png";
import altinyildiz from "../images/carouselBrands/altinyildiz.jpg";
import nike from "../images/carouselBrands/nike.png";
import dufy from "../images/carouselBrands/dufy.png";
import tommylife from "../images/carouselBrands/tommylife.png";
import skechers from "../images/carouselBrands/skechers.png";
import jackjones from "../images/carouselBrands/jasckjones.png";

//
const styles = {
  carouselHolder: {
    "& .slick-arrow.slick-prev": {
      width: "2rem",
      height: "100%",
      zIndex: "9",
      left: "-2rem",
      background: "url(https://cdn.dsmcdn.com/web/production/slider-arrow-passive.svg) no-repeat center",
      backgroundColor: "#fff",
      transform: "rotateZ(180deg)",
      top: "0",
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        zIndex: "9",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)",
        width: "3rem",
        height: "100%",
        top: "0 ",
        right: "2rem",
      },
      
    },
    "& .slick-arrow.slick-next": {
      width: "2rem",
      height: "100%",
      zIndex: "9",
      right: "-2rem",
      background: "url(https://cdn.dsmcdn.com/web/production/slider-arrow-passive.svg) no-repeat center",
      backgroundColor: "#fff",
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        zIndex: "9",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)",
        width: "3rem",
        height: "100%",
        top: "0 ",
        right: "2rem",
      },
    },
    paddingBottom: "1rem",
    width: "100%",
    "& a": {
      display: "inline-block",
      textAlign: "center",
      height: "4.5rem",
      width: "4.5rem",
      textDecoration: "none",
      color: "#333",
      fontSize: ".75rem",
      fontWeight: "600",
      "&:hover .imageHolder": {
        border: "1px solid #f28283",
      },
      "&:hover span": {
        color: "#f28283",
      },
      "& .imageHolder": {
        border: "1px solid #e6e6e6",
        borderRadius: "50%",
        overflow: "hidden",
        "& img": {
          maxWidth: "100%",
        },
      },
      '& span': {
        display: "inline-block",
        marginTop: ".5rem",
      }
    },
  },
};
//
class BrandsCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 11,
      slidesToScroll: 7,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className={this.props.classes.carouselHolder}>
        <Slider {...settings}>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={sanaOzel} alt="sanaozel" />
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
                  <img src={sendeAl} alt="" />
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
                  <img src={oyunEglence} alt="" />
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
                  <img src={koton} alt="" />
                </div>
                <div>
                  <span>Koton</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={pullandbear} alt="" />
                </div>
                <div>
                  <span>Pull & Bear</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={migros} alt="" />
                </div>
                <div>
                  <span>Migros</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={trendyolman} alt="" />
                </div>
                <div>
                  <span>Trendyolman</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={pierrecardin} alt="" />
                </div>
                <div>
                  <span>PierreCardin</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={defacto} alt="" />
                </div>
                <div>
                  <span>Defacto</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={hummel} alt="" />
                </div>
                <div>
                  <span>Hummel</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={derimod} alt="" />
                </div>
                <div>
                  <span>Derimod</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={hotic} alt="" />
                </div>
                <div>
                  <span>Hotiç</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={kotonkids} alt="" />
                </div>
                <div>
                  <span>Koton Kids</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={lcwaikiki} alt="" />
                </div>
                <div>
                  <span>Lc waikiki</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={aquadipolo} alt="" />
                </div>
                <div>
                  <span>Aqua di polo</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={lufian} alt="" />
                </div>
                <div>
                  <span>Lufian</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={avva} alt="" />
                </div>
                <div>
                  <span>Avva</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={dynamo} alt="" />
                </div>
                <div>
                  <span>Dynamo</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={mavi} alt="" />
                </div>
                <div>
                  <span>Mavi</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={adidas} alt="" />
                </div>
                <div>
                  <span>Adidas</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={mudo} alt="" />
                </div>
                <div>
                  <span>Mudo</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={guess} alt="" />
                </div>
                <div>
                  <span>Guess</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={altinyildiz} alt="" />
                </div>
                <div>
                  <span>Altınyıldız</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={nike} alt="" />
                </div>
                <div>
                  <span>Nike</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={dufy} alt="" />
                </div>
                <div>
                  <span>Dufy</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={tommylife} alt="" />
                </div>
                <div>
                  <span>Tommy life</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={skechers} alt="" />
                </div>
                <div>
                  <span>Skechers</span>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/sanaozel">
              <div>
                <div className="imageHolder">
                  <img src={jackjones} alt="" />
                </div>
                <div>
                  <span>Jack & Jones</span>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(BrandsCarousel);
