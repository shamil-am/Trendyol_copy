import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

//
import Header from "./components/Header"
//

const styles = {
  container: {
    maxWidth: "1140px",
    marginRight: "auto",
    marginLeft: "auto",
    // backgroundColor: "red"
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Header/>
    </Grid>
  );
};

export default withStyles(styles)(App);
