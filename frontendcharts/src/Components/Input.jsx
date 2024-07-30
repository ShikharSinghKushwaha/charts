import React from "react";

function Input({value,placeholder,submit,name}){


    return(
        <div>
            <form onSubmit={submit}>
            <input type="number"
            name={name}
            placeholder={placeholder}
            onChange={value}
            />
            <button type="submit">Submit</button>
</form>
            {/* <input type="number"
            placeholder={placeholder}
            onInput={value}
            /> */}
        </div>
    )
}

export default Input

