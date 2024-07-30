import React from "react";

function GivePadding({childComp}){

    return(
    <>
      <div style={{paddingTop:'120px'}} >
         {childComp}
        </div>  
    </>
    )
}

export default GivePadding