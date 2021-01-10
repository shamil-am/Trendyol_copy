import React, { Component } from "react";
import BrandsCarousel from "./BrandsCarousel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  dashboard: {
    maxWidth: "1140px",
    // backgroundColor: "red",
    '& .slick-arrow.slick-prev':{
        backgroundColor: "teal",
        zIndex: "9",
        left: "0",
    },
    '& .slick-arrow.slick-next':{
        backgroundColor: "teal",
        zIndex: "9",
        right: "0",
    }
  },
};

class Dashboard extends Component {
  render() {
    return (
      <div className={this.props.classes.dashboard}>
        <BrandsCarousel />
      </div>
    );
  }
}
export default withStyles(styles)(Dashboard);
