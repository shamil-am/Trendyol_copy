import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
//
import trenyolman from "../images/mainPage/man/trendyolMan.jpg";
import ayakkabiIndirim from "../images/mainPage/man/ayakkabiIndirim.jpg";
import muggoIndirim from "../images/mainPage/man/muggoIndirim.jpg";
import kisFirsatlari from "../images/mainPage/man/kisFirsatlari.jpg";
import tommyHilfiger from "../images/mainPage/man/TommyHilfiger.jpg";
import aquaDiPolo from "../images/mainPage/man/aquaDiPolo.jpg";
import avva from "../images/mainPage/man/Avva.jpg";
// /Users/shamil_mammadov/Desktop/Trendyol_copy/trendyol/src/images/mainPage/man/Avva.jpg
//
const classes = {
  cardHolder: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "2px solid transparent",
    maxHeight: "16rem",
    transition: "all .5s",
    marginBottom: ".5rem",
    "&:hover": {
      border: "2px solid red",
    },
    "&:hover .contentHolder": {
      backgroundColor: "#f28232",
      "& h5.startBtn": {
        opacity: "1",
      },
    },
    "&:hover .imageHolder img": {
      transform: "scale(1.02)",
    },
    "& .imageHolder": {
      overflow: "hidden",
      "& img": {
        maxWidth: "100%",
        transform: "scale(1)",
        transition: "all 2s",
      },
    },
    "& .contentHolder": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem 1rem",
      color: "#fff",
      backgroundColor: "#000",
      transition: "all .5s",
      "& h5": {
        margin: "0",
      },
      "& h5.startBtn": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all .5s",
        opacity: "0",
      },
    },
  },
};
//
class MainInDashboard extends Component {
  render() {
    return (
      <Grid container>
        <Grid item m={12} md={8} lg={9}>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={trenyolman} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>TRENDYOLMİLLA & TRENDYOL MAN - En İyiler</h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={ayakkabiIndirim} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>Ayakkabıda İndirim Fırsatları</h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={muggoIndirim} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>Ayakkabıda Ocak Fırsatları</h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={kisFirsatlari} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>Kış Fırsatları - Sepette %50 İndirim </h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={tommyHilfiger} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>Tommy Hilfiger</h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={aquaDiPolo} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>Aqua Di Polo Saat & Güneş Gözlüğü</h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
          <div className={this.props.classes.cardHolder}>
            <div className="imageHolder">
              <Link to="/">
                <img src={avva} alt="" />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>Avva - Erkek Tekstilaat & Güneş Gözlüğü</h5>
              <h5 className="startBtn">
                Alışverişe Başla <KeyboardArrowRightIcon />
              </h5>
            </div>
          </div>
        </Grid>

        <Grid item m={12} md={4} lg={3}>
          right
        </Grid>
      </Grid>
    );
  }
}

//
export default withStyles(classes)(MainInDashboard);
