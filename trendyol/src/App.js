import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
//
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Navigator from "./components/Navigator";


//

const styles = {
  container: {
    maxWidth: "1140px",
    marginRight: "auto",
    marginLeft: "auto",
    // backgroundColor: "red"
  },
};


class App extends Component {
  render() {
    return (
      <Grid container className={this.props.classes.container}>
        <Header />
        <Navigator />
        <Dashboard />
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
