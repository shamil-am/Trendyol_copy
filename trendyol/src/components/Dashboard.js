import React, { Component } from "react";
import BrandsCarousel from "./BrandsCarousel";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const styles = {
  dashboard: {
    maxWidth: "1140px",
    // backgroundColor: "red",
  },
};

class Dashboard extends Component {
  render() {
    return (
      <Grid className={this.props.classes.dashboard} container>
        <Grid item xs={12} sm={12}>
          <BrandsCarousel />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Dashboard);
