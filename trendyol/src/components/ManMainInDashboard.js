import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
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
class ManMainInDashboard extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    let a = document.querySelector("a[href='/erkek']");
    a.style.backgroundColor = Central.hoveredColor;
    a.style.color = "#ffffff";
    fetch("http://localhost:3000/manmainpage")
      .then((resp) => resp.json())
      .then((res) => this.setState({ images: res }));
  }
  componentWillUnmount() {
    let a = document.querySelector("a[href='/erkek']");
    a.style.backgroundColor = "#ffffff";
    a.style.color = "#333";
  }
  render() {
    return (
      <Grid container>
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

        <Grid item sm={12} md={4} lg={3}>
          right
        </Grid>
      </Grid>
    );
  }
}

//
export default withStyles(classes)(ManMainInDashboard);
