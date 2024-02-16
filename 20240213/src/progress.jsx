import React from 'react';
export default (props)=>{
    return <div ref={props.ref} style={{
        "margin":0,
        "padding":0,
        "display":"inline-block",
        "backgroundColor":"blue",
        "height":"10px",
        "width":props.width
    }}>
        <div style={{
            "top":"-7.5px",
            "margin":0,
            "padding":0,
            "display":"inline-block",
            "backgroundColor":"red",
            "width":"10px",
            "height":"10px",
            "position":"relative",
            "left":props.value
        }}></div>
    </div>
};