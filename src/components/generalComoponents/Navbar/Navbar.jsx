import React from "react";

//React Router 6
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss";

// React icons
import { CiInstagram } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowNavbar,
  setShowNavbarToFalse,
} from "../../../redux/slices/staticState/logicSlice";

export const Navbar = () => {
  // redux || state || reducers
  const dispatch = useDispatch();
  const logic = useSelector((state) => state.logicSlice);
  const productionState = useSelector((state) => state.productsStateSlice);

  // sets toggleNavbar value accordin to the size of the scren
  const handleResize = () => {
    if (window.innerWidth >= 600) {
      dispatch(setShowNavbarToFalse());
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <div className="navbarContainer">
      <div className="hamNavar">
        <p onClick={() => dispatch(toggleShowNavbar())}>
          {logic.showNavbar ? <IoIosCloseCircle /> : "menu"}
        </p>
      </div>
      <div
        setShowNavbarToFalse
        className="hamNavbarList"
        style={logic.showNavbar ? { display: "flex" } : { display: "none" }}
      >
        <Link
          onClick={() => dispatch(setShowNavbarToFalse())}
          className="navbarLink"
          to="/"
        >
          home
        </Link>
        <Link
          className="navbarLink"
          to="/shopmenu"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          shop
        </Link>
        <Link
          className="navbarLink"
          to="/about"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          about
        </Link>
        <Link
          className="navbarLink"
          to="/faq"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          faqs
        </Link>
        <Link
          className="navbarLink"
          to="/reviews"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          reviews
        </Link>

        <Link
          className="navbarLink"
          to="/login"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          login
        </Link>

        <Link
          className="navbarLink"
          to="/contact"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          contact
        </Link>
        <a
          onClick={() => dispatch(setShowNavbarToFalse())}
          className="navbarLink"
          href="https://www.instagram.com/riga_designn"
          target="_"
        >
          <CiInstagram className="icon" />
        </a>
        <Link
          className="navbarLink"
          to="/cart"
          onClick={() => dispatch(setShowNavbarToFalse())}
        >
          <CiShoppingCart className="icon" />{" "}
          <span>{productionState.cartCount}</span>
        </Link>
      </div>

      <div>
        <Link className="navbarLink" to="./">
          home
        </Link>
        <Link className="navbarLink" to="./shopmenu">
          shop
        </Link>
        <Link className="navbarLink" to="./about">
          about
        </Link>
        <Link className="navbarLink" to="./faq">
          faqs
        </Link>
        <Link className="navbarLink" to="./reviews">
          reviews
        </Link>
      </div>

      <div className="navbarImgContainer">RIGA</div>

      <div>
        <Link className="navbarLink" to="./login">
          login
        </Link>
        <Link className="navbarLink" to="./contact">
          contact
        </Link>
        <a
          className="navbarLink"
          href="https://www.instagram.com/riga_designn"
          target="_"
        >
          <CiInstagram className="icon" />
        </a>
        <Link className="navbarLink" to="./cart">
          <CiShoppingCart className="icon" />{" "}
          <sup>{productionState.cartCount}</sup>
        </Link>
      </div>
    </div>
  );
};
