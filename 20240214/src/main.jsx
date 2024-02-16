import React, {useState} from 'react';
import { usePhone, useLimitCheckbox, useTagSelector, useInputRange, useInputNumber } from '../hook/hook';
// import Search from './search';
// import Container from './container';

// Custom Hook
// inpup text태그 생성 훅 -> 최소 길이와 최대 길이 지정
// 리턴값은 text 태그의 value와 태그

// number 태그 생성 훅 -> 문자열이 들어가면 안되는 input text 태그
// number외에 다른게 들어있는지 판별하는 isAllow와 값, 태그 반환

export default ()=>{
    let [allow, value, tag] = useInputNumber(0);
    // let [rangeValue, rangeTag] = useInputRange(20, 10);
    // let [tag, indexChanger] = useTagSelector(
    //     <span>1</span>,
    //     <span>2</span>,
    //     <span>3</span>
    // );

    // let [isAllow, checks, checksChanger] = useLimitCheckbox(2, 1, 1);

    // let [isPhone, phoneValue, phoneChanger] = usePhone("");
    // let [phone, phoneFunc] = useState("");
    // let [value, valueFunc] = useState("");
    // let checkboxValues = ["남","여","외계인"];
    return <div>

        {/* {rangeValue} */}
        {allow ? `[${value}]` : `(${value})`}
        &nbsp;&nbsp;&nbsp;
        {tag}
        {/* {rangeTag} */}
        {/* <input type="range" min={0} max={2} step={1} onChange={(e)=>{
            indexChanger(e.currentTarget.value);
        }}/>
        {tag} */}
        {/* {checkboxValues.map((value, index)=>{
            return <div>
                <label>{value}</label>
                <input type="checkbox" name="check" onChange={(e)=>{
                    checksChanger(index, e.currentTarget.checked);
                }}/>
            </div>
        })}
        &nbsp;&nbsp;&nbsp;
        <span>{isAllow ? "OK" : "FALSE"}</span> */}


        {/* <input type="text" onChange={(e)=>{
            phoneChanger(e.currentTarget.value)
        }}/>
        &nbsp;<span>{isPhone ? "OK" : "FALSE"}</span>&nbsp;&nbsp;<span>{phoneValue}</span> */}
        {/* <Search changeFunc={valueFunc}/>
        <Container searchValue={value}/> */}
    </div>;
}