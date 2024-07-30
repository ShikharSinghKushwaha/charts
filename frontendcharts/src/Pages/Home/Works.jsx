import React from "react";
import PostAddIcon from '@mui/icons-material/PostAdd';
//import {  } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import  './Work.css'

function HowItWorks(){
    return(
        <div> 
            <div className="main-works-container">
                <h1 id='works'>How it Works</h1>
              <div className="boxes-container">
                <div className="des-container">
                    <PostAddIcon className="data icon" style={{fontSize:'3.5em'}}/>
                    <h1>
                        Enter the Data
                    </h1>
                    <p className="des-text">Add your data into the spread sheet panel.</p>
                </div>
                <div className="des-container">
                    <EditIcon className="customize icon"  style={{fontSize:'3.5em'}}/>
                    <h1>
                        Customize the Chart 
                    </h1>
                    <p className="des-text">Modify your chart according to your Needs and see the Live Preview</p>
                </div>
                <div className="des-container">
                    <DownloadIcon className='download icon' style={{fontSize:'3.5em'}}/>
                    <h1>
                        Download in the form of Image
                    </h1>
                    <p className="des-text">Download you charts after the Chart is Prepared</p>
                </div>
              </div>
              </div>
        </div>
    )
}

export default HowItWorks