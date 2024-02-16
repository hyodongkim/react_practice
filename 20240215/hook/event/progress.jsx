import React, {useState} from 'react';

// 조건 1 - div에 붙여야 한다

export default (delay = 0.5, backoptions = {}, baroptions = {}, middlebaroptions = {}, middlebardelay = 0.7)=>{
    let [percent, percentChanger] = useState(50);
    return [percent, (value)=>{
        if(value < 0) percentChanger(0);
        else if(value > 100) percentChanger(100);
        else percentChanger(value);
    }, {
        style:{
            overflow:"hidden",
            backgroundColor:"black",
            display:"inline-block",
            width:"300px",
            height:"50px",
            ...backoptions
        },
        children:[<div style={{
            backgroundColor:"white",
            transition:`width ${delay}s ease-out ${middlebardelay}s`,
            width:`${percent}%`,
            height:"100%",
            ...middlebaroptions
        }}></div>,<div style={{
            position:"relative",
            top:"-100%",
            backgroundColor:"white",
            transition:`width ${delay}s ease-out`,
            width:`${percent}%`,
            height:"100%",
            ...baroptions
        }}></div>]
    }]
}