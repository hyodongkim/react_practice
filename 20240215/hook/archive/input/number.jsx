import React, {useState, useRef, useReducer, useEffect, useId} from 'react';

export default (def)=>{
    let [value, valueChanger] = useState(def);
    let [isAllow, allowChanger] = useState(true);
    useEffect(()=>{
        if(parseInt(value).toString() === value){
            allowChanger(true);
        }
        else{
            allowChanger(false);
        }
    },[value]);
    return [isAllow, value, <input type="text" 
    value={value} 
    onChange={(e)=>{
        valueChanger(e.currentTarget.value);
    }}/>];
}