import React, {useEffect, useState} from 'react';
export default (onChange, predicate = v=>true)=>{
    let [before, beforeChanger] = useState("");
    let [allow, allowChanger] = useState(predicate(""));
    useEffect(()=>{
        if(predicate(before)) allowChanger(true);
        else allowChanger(false);
    },[before]);
    return {
        type:"text",
        onChange:(e)=>{
            onChange(e.currentTarget.value, before, allow);
            beforeChanger(e.currentTarget.value);
        }
    }
};