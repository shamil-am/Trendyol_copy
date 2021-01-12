import React, { Component } from "react";
import BrandsCarousel from "./BrandsCarousel";
import Grid from "@material-ui/core/Grid";
import ManMainInDashboard from "./ManMainInDashboard";
import { Switch, Route } from "react-router-dom";
import WomanMainInDashboard from "./WomanMainInDashboard";
import ChildrenMainInDashboard from "./ChildrenMainInDashboard";
//

//
class Dashboard extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Switch>
            <Route exact path="/kadin">
              <BrandsCarousel />
              <WomanMainInDashboard />
            </Route>
            <Route exact path="/erkek">
              <BrandsCarousel />
              <ManMainInDashboard />
            </Route>
            <Route exact path="/cocuk">
              <BrandsCarousel />
              <ChildrenMainInDashboard />
            </Route>
            <Route>note yet</Route>
          </Switch>
        </Grid>
      </Grid>
    );
  }
}
export default Dashboard;
