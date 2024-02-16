import React from 'react';
import {Form, useParams} from 'react-router-dom';
export default ()=>{
    let datas = useParams();
    return <div>{datas.wow}&nbsp;{datas.two}</div>
}