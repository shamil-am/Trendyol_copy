import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Loader from "react-loader-spinner";

//

import Central from "../components/Central";

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
      backgroundColor: Central.hoveredColor,
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
class WomanMainInDashboard extends Component {
  state = {
    images: [],
    hasLoaded: false,
  };
  async componentDidMount() {
    const api = "http://localhost:3000/womanmainpage";
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setTimeout(() => {
        this.setState({ images: json, hasLoaded: true });
      }, 500);
    } catch (error) {
      console.log(error);
    }

    let a = document.querySelector("a[href='/kadin']");
    a.style.backgroundColor = Central.hoveredColor;
    a.style.color = "#fff";
  }
  componentWillUnmount() {
    let a = document.querySelector("a[href='/kadin']");
    a.style.backgroundColor = "#ffffff";
    a.style.color = "#333";
  }

  renderLoader = () => {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Loader
          type="ThreeDots"
          color={Central.hoveredColor}
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Grid>
    );
  };

  renderCards = () => {
    return (
      <>
        <Grid item sm={12} md={8} lg={9}>
          {this.state.images.map((card) => (
            <div className={this.props.classes.cardHolder} key={card.id}>
              <div className="imageHolder">
                <Link to="/">
                  <img src={card.href} alt="" />
                </Link>
              </div>
              <div className="contentHolder">
                <h5>{card.title}</h5>
                <h5 className="startBtn">
                  Alışverişe Başla <KeyboardArrowRightIcon />
                </h5>
              </div>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          right
        </Grid>
      </>
    );
  };

  render() {
    return (
      <Grid container>
        {this.state.hasLoaded === false
          ? this.renderLoader()
          : this.renderCards()}
      </Grid>
    );
  }
}

//
export default withStyles(classes)(WomanMainInDashboard);
