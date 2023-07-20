import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import "./MyAccount.css";
import Form from "./Form";

const MyAccount = () => {
  return (
    <Fragment>
      <div className="account-navcontainer">
        <Link to="./" className="account-logo">
          ColorLib
        </Link>

        <div className="account-navbar">
          <Link to="" className="account-link">
            BUY LICENCE
          </Link>
          <Link to="" className="account-link">
            HOSTING
          </Link>
          <Link to="/WpThemes" className="account-link">
            WORDPRESSTHEMES
          </Link>
        </div>
      </div>

      <div className="purchase-con">
        <h3>Purchase History</h3>
        <h3>Suscriptions</h3>
        <h3>Account Information</h3>
        <p>You need to log-in to edit your profile</p>
        <p>Log in to your Account</p>
      </div>
      <Form />
      <Outlet />
    </Fragment>
  );
};

export default MyAccount;
