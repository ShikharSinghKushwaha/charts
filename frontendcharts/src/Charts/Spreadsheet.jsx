import React, { useState } from "react";
import Spreadsheet from 'react-spreadsheet'


function SpreadSheet(){
    const columnLabels = ["Flavour", "Food",'eoref'];
    const rowLabels = ["X-Asix", "Y-Asix",'pwew'];

    // const [ data,setData ] = useState([
        
    // ])
    const data = [
        [{ value: "Vanilla" }, { value: "Chocolate",readOnly:false }],
        [{ value: "Strawberry" }, { value: "Cookies" }],
      ];
   
    return(
        <div>
            <Spreadsheet 
             data={data}
             DataEditor={'sdsd'}
             columnLabels={columnLabels}
             rowLabels={rowLabels}
            />
        </div>
    )
}

export default SpreadSheet