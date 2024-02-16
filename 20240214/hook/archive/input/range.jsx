import React, {useState, useRef, useReducer, useEffect, useId} from 'react';

export default (max, min = 0, step = 1)=>{
    let [rangeValue, rangeValueChanger] = useState(max);
    return [rangeValue, <input 
    type="range" 
    min={min} 
    max={max} 
    step={step} 
    onChange={(e)=>{
        rangeValueChanger(e.currentTarget.value);
    }}/>];
}