import React from "react";
import RectDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";

RectDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GifExpertApp/>
    </React.StrictMode>
);