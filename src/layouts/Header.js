import React from "react";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpg";
export default function Header() {
  return (
    <header>
      {" "}
      <img src={img1} alt="Landscape" />{" "}
    </header>
  );
}
