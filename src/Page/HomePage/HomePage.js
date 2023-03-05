import React, { useState, useRef } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import style from "./HomePage.module.css";
import { BsStarFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import ReactPDF from "@react-pdf/renderer";
import MyDocument from "../My Document/MyDocument";

export default function HomePage() {
  const [color, setColor] = useState("black");

  function handleDownload() {
    ReactPDF.render(<MyDocument />, `${__dirname}/doc.pdf`);
  }
  const printDiv = useRef();
  

  return (
    <div>
      <div className={style.main}>
        <div className={style.subMain}>
          <img
            src="https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo.jpg"
            alt="logo"
            className={style.icon}
          />
          <sup contentEditable="true">Google Document</sup>
          <sup>
            {" "}<BsStarFill
              className={style.star}
              onClick={() => setColor(color === "black" ? "yellow" : "black")}
              style={{ color: color }}
            />
          </sup>
        </div>

        <Navbar printDiv={printDiv} />
        <div className={style.wrapper}>
          <div
            ref={printDiv}
            id="printablediv"
            className={style.textArea}
            contentEditable="true"
          />
        </div>
      </div>
      <div className={style.download}>
        <HiDownload onClick={handleDownload} />
      </div>
    </div>
  );
}
