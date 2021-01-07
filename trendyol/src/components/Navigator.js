import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
//

const styles = {
  navigatorUl: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: "0",
    margin: "0",
    flexWrap: "wrap",
    "& li": {
      "& a": {
        display: "inline-block",
        padding: "0.5rem 1rem",
        color: "#333",
        textDecoration: "none",
        transition: ".2s",
        position: "relative",
        fontWeight: "700",
        "&::before": {
          content: '""',
          height: "2px",
          width: "0px",
          position: "absolute",
          bottom: "0",
          left: "50%",
          backgroundColor: "#f28283",
          transition: ".2s",
        },
        "&:hover": {
          color: "#f28232",
          "&::before": {
            width: "100%",
            left: "0",
          },
        },
      },
    },
  },
};

//
class Navigator extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <ul className={this.props.classes.navigatorUl}>
          <li>
            <Link>KADIN</Link>
          </li>
          <li>
            <Link>ERKEK</Link>
          </li>
          <li>
            <Link>ÇOCUK</Link>
          </li>
          <li>
            <Link>EV & YAŞAM</Link>
          </li>
          <li>
            <Link>SÜPERMARKET</Link>
          </li>
          <li>
            <Link>KOZMETİK</Link>
          </li>
          <li>
            <Link>AYAKKABI & ÇANTA</Link>
          </li>
          <li>
            <Link>SAAT & AKSESUAR</Link>
          </li>
          <li>
            <Link>ELEKTRONİK</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Navigator);
