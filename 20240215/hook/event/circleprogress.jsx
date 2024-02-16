import React, {useState} from 'react';

export default (size = 200, ballCount = 9, ballSize = 20, backoptions = {})=>{
    let [percent, percentChanger] = useState(50);
    let balls = [];
    for(let i = 0; i < ballCount; i += 1){
        balls.push(
            <div style={{
                //backgroundColor:"white",
                position:"absolute",
                width:`${size}px`,
                top:`${size / 2 - ballSize / 2}px`,
                transform:`rotate(${360 / ballCount * i + percent}deg)`,
            }}>
                <div style={{
                    backgroundColor:"red",
                    borderRadius:"50%",
                    width:`${ballSize}px`,
                    height:`${ballSize}px`,
                    position:'relative',
                }}>O</div>
            </div>
        );
    }
    return [percent, percentChanger, {
        style:{
            overflow:"hidden",
            position:"relative",
            backgroundColor:"black",
            display:"inline-block",
            width:`${size}px`,
            height:`${size}px`,
            ...backoptions
        },
        children:balls
    }]
}