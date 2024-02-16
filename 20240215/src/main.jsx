import React from 'react';
import { useTooltip, useText, useProgress, useCircleProgress } from '../hook/hook';

export default ()=>{
    let [a,b,progress] = useCircleProgress(200, 15);
    // let [percent, percentChanger, progress] = useProgress(0.5,{
    //     borderRadius:"10px"
    // },{
    //     backgroundColor:"red"
    // });
    // let [percent2, percentChanger2, progress2] = useProgress(0.5,{
    //     borderRadius:"10px"
    // },{
    //     backgroundColor:"blue"
    // });
    // let options = useText((value, before, allow)=>{
    //     console.log(value,before,allow);
    // });
    // let tooltip = useTooltip("Box Value");
    // {key:value} -> ...object -> key,value -> key=value
    // let divOptions = {
    //     onClick : (e)=>{
    //         console.log('모든 태그에');
    //     }
    // }
    return <div>
        <div {...progress}></div>
        <button onClick={()=>{b(a + 15)}}>돌리기</button>
        {/* <div {...progress}></div><br></br>
        <div {...progress2}></div><br></br>
        <button onClick={()=>{percentChanger(percent - 10)}}>10% 감소</button>
        <button onClick={()=>{percentChanger(percent + 10)}}>10% 증가</button>
        <br></br>
        <button onClick={()=>{percentChanger2(percent2 - 10)}}>10% 감소</button>
        <button onClick={()=>{percentChanger2(percent2 + 10)}}>10% 증가</button> */}
        {/* <input {...options}/> */}
    {/* <div {...tooltip} data-set="Hello1">Hello</div>
        <div {...tooltip} data-set="Hello2">Hello</div>
        <div {...tooltip} data-set="Hello3">Hello</div>
        <div {...tooltip} data-set="Hello4">Hello</div>
        <div {...tooltip} data-set="Hello5">Hello</div> */}
    </div>;
}