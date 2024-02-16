import React, {useState, useRef, useReducer, useEffect, useId} from 'react';

export default (...tags)=>{
    let [index, indexChanger] = useState(0);
    return [tags[index], indexChanger];
}