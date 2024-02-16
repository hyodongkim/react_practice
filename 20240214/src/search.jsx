import React from 'react';

export default (props)=>{
    let style = {
        display:"inline-block",
        width:"300px",
    };
    return <div style={style}>
        <input type="text" onChange={(e)=>{
            props.changeFunc(e.currentTarget.value)
        }}/>
    </div>
}