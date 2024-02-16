import React, {useState, useRef, useReducer, useEffect, useId} from 'react';

export default (defaultValue)=>{
    let [realValue, realValueChanger] = useState(defaultValue);
    let [outputValue, outputValueChanger] = useState(defaultValue);
    let [isPossible, isPossibleChanger] = useState(false);

    useEffect(()=>{
        if(realValue.match(/^\d{2,3}-?\d{3,4}-?\d{4}$/i)){
            isPossibleChanger(true);
            outputValueChanger(realValue);
        } else {
            isPossibleChanger(false);
        }
    }, [realValue]);

    return [isPossible, outputValue, realValueChanger];
}