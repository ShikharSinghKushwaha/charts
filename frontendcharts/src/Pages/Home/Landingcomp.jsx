import React from "react";
import './Landing.css'
import bar from "./bar.png";
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
function Landing() {
  return (
    <div>
      <div className="flex-container">
        <div className="landing-text">
          <h1>
            Create Your Charts With <b style={{fontSize:'2em',color:'rgb(54,162,235)'}}>ChartsWorld</b>
          </h1>
          <a className="button" href="#works">How It Works</a>
        </div>
        <div className="landing-image">
          <img className="demo-img" src={bar} />
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
