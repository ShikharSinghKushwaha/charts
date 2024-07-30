import React from "react";
import Landing from "./Landingcomp";
import HowItWorks from "./Works";
import { useParams } from "react-router-dom";
function HomePage(){
    const {chartName} = useParams();

    console.log(chartName)
    return(
        <div>

           <Landing/>
           <HowItWorks />

        </div>
    )
}

export default HomePage