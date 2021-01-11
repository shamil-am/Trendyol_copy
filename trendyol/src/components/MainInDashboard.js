import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
//
import trenyolman from "../images/mainPage/man/trendyolMan.jpg";

const classes = {
  cardHolder: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "2px solid transparent",
    maxHeight: "16rem",
    transition: "all .5s",
    "&:hover": {
      border: "2px solid red",
    },
    "&:hover .contentHolder": {    
      backgroundColor: "#f28232",
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
      padding: ".5rem 1rem",
      color: "#fff",
      backgroundColor: "#000",
      transition: "all .5s",
      "& h5": {
        margin: "0",
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
              <Link>
                <img src={trenyolman} />
              </Link>
            </div>
            <div className="contentHolder">
              <h5>TRENDYOLMİLLA & TRENDYOL MAN - En İyiler</h5>
              <h5>Alışverişe Başla</h5>
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
