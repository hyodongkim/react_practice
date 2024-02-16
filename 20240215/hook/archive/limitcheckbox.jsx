import React, {useState, useRef, useReducer, useEffect, useId} from 'react';

export default (valueCount, limitCount, requiredCount = 0)=>{
    let def = [];
    for(let i = 0; i < valueCount; i += 1) def.push(false);
    let [checks, checksChanger] = useState(def);
    let [isAllow, allowChanger] = useState(false);
    useEffect(()=>{
        let length = checks.filter(check=>check).length;
        if(requiredCount <= length && length <= limitCount){
            allowChanger(true);
        }
        else{
            allowChanger(false);
        }
    }, [checks]);

    return [isAllow, checks, (index, state)=>{
        let copy = [...checks];
        if(copy[index] === state) return;
        copy[index] = state;
        checksChanger(copy);
    }]
}