import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import CommentIcon from "@material-ui/icons/Comment";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import PersonIcon from "@material-ui/icons/Person";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//

const styles = {
  subMenu: {
    border: "1px solid #d6d6d6 ",
    boxShadow: "0 4px 3px 1px rgba(0, 0, 0, 0.07)",
    padding: "0 0.75rem",
    position: "absolute",
    zIndex: "9",
    backgroundColor: "#fff",
    top: "3.5rem",
    "& ul": {
      listStyle: "none",
      padding: "0",
      "& a": {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "#1b1b1b",
        fontSize: "0.825rem",
        padding: ".5rem 0",
        transition: ".2s",
        "&:hover": {
          color: "#f28232",
        },
        "& svg": {
          fontSize: "1rem",
          marginRight: ".5rem",
        },
      },
    },
  },
};
class AccountNavigator extends Component {
  render() {
    return (
      <div className={this.props.classes.subMenu}>
        <ul>
          <li>
            <p style={{ margin: "0", color: "#f28232" }}>Shamil Mammadov</p>
          </li>
          <li>
            <Link to="orders">
              <AllInboxIcon />
              <span>Siparişlerim</span>
            </Link>
          </li>
          <li>
            <Link to="evaluation">
              <CommentIcon />
              <span>Değerlendirmelerim</span>
            </Link>
          </li>
          <li>
            <Link to="wallet">
              <AccountBalanceWalletIcon />
              <span>Trendyol Cüzdanım</span>
            </Link>
          </li>
          <li>
            <Link to="discountcoupons">
              <LoyaltyIcon />
              <span>İndirim Kuponlarım</span>
            </Link>
          </li>
          <li>
            <Link to="userinformation">
              <PersonIcon />
              <span>Kullanıcı Bilgilerim</span>
            </Link>
          </li>
          <li>
            <Link to="asistant">
              <AccessibilityIcon />
              <span>Trendyol Asistan</span>
            </Link>
          </li>
          <li>
            <Link to="help">
              <LiveHelpIcon />
              <span>Yardım</span>
            </Link>
          </li>
          <li>
            <Link to="exit">
              <ExitToAppIcon />
              <span>Çıkış Yap</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(AccountNavigator);
