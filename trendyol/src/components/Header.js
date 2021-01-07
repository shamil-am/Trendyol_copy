import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

//
import logo from "../images/logo.svg";
import AccountNavigator from "./AccountNavigator";
//
const styles = {
  logoSide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& a": {
      width: "10rem",
      height: "4rem",
    },
  },
  searchHolder: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiInputBase-root": {
      width: "25rem",
      border: "1px solid #e0e0e0",
      borderRadius: "1.25rem",
      backgroundColor: "#faf9f9",
      padding: ".25rem 2.5rem .25rem 1rem",
      "& .MuiInputBase-input": {
        fontSize: ".75rem",
      },
    },
    "& .MuiGrid-root.searchIcon": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "calc(50% - 12rem)",
      color: "red",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  accountSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& a.accountMain": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 .5rem",
      padding: ".5rem 0",
      textDecoration: "none",
      color: "#333333",
    },
  },
};

class Header extends Component {
  state = {
    accountIcon: "notHovered",
    heartIcon: "notHovered",
    cartIcon: "notHovered",
  };
  render() {
    return (
      <Grid container style={{paddingBottom: "1rem"}}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          className={this.props.classes.logoSide}
        >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          lg={6}
          className={this.props.classes.searchHolder}
        >
          <Grid>
            <InputBase placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
          </Grid>
          <Grid className="searchIcon">
            <SearchIcon onClick={() => alert("aaaa")} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          className={this.props.classes.accountSide}
        >
          <Grid>
            <Link
              className="accountMain"
              to="account"
              onMouseEnter={() => this.setState({ accountIcon: "hovered" })}
              onMouseLeave={() => this.setState({ accountIcon: "notHovered" })}
              style={{ position: "relative" }}
            >
              {this.state.accountIcon === "notHovered" ? (
                <PersonOutlineIcon />
              ) : (
                <>
                  <PersonIcon style={{ color: "#f28232" }} />
                  <AccountNavigator />
                </>
              )}
              <Typography variant="caption">Hesabım</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link
              className="accountMain"
              to="favorite"
              onMouseEnter={() => this.setState({ heartIcon: "hovered" })}
              onMouseLeave={() => this.setState({ heartIcon: "notHovered" })}
            >
              {this.state.heartIcon === "notHovered" ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon style={{ color: "#f28232" }} />
              )}

              <Typography variant="caption">Favorilerim</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link
              className="accountMain"
              to="cart"
              onMouseEnter={() => this.setState({ cartIcon: "hovered" })}
              onMouseLeave={() => this.setState({ cartIcon: "notHovered" })}
            >
              <ShoppingCartIcon
                style={{
                  color:
                    this.state.cartIcon === "notHovered"
                      ? "inherit"
                      : "#f28232",
                }}
              />
              <Typography variant="caption">Sepetim</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Header);
