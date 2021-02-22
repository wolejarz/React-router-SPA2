import React from "react";
// import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.png";
import img3 from "../images/header3.png";
import img4 from "../images/header4.png";

export default function Header() {
  const images = [img1, img2, img3, img4];
  const index = Math.floor(Math.random() * 4);
  let img = images[index];
  return (
    <React.Fragment>
      <img src={img} alt="Landscape1" />
      {/* <Switch>
        <Route
          exact
          path="/"
          render={() => <img src={img1} alt="Landscape1" />}
        />
        <Route
          path="/products"
          render={() => <img src={img2} alt="Landscape2" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="Landscape3" />}
        />
        <Route
          path="/admin"
          render={() => <img src={img4} alt="Landscape4" />}
        />
        <Route path="" render={() => <img src={img4} alt="Landscape4" />} />
      </Switch> */}
    </React.Fragment>
  );
}
