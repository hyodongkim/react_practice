import React, { useState, useMemo, useCallback, useRef, useDeferredValue, useTransition } from 'react';
import Progress from './progress';

// useRef를 이용해서 document를 획득
// document를 이용해 한 태그에 내용을 변경하는 기능 추가

// useMemo를 이용해서 1 ~ 내가 입력한 수까지의 소수를 출력하는 기능
// 내가 입력한 수까지 소수를 구하는 함수는 useCallback을 이용

export default ()=>{
    let [input, inputFunc] = useState(0);
    let sosufinder = useCallback(()=>{
        let result = [];
        const sosuchecker = (data)=>{
            if(data < 2) return false;
            for(let i = 2; i < data / 2; i += 1){
                if(data % i == 0) return false;
            }
            return true;
        }
        for(let i = 1; i <= input; i += 1){
            if(sosuchecker(i)) result.push(i);
        }
        return result;
    }, [input]);
    let sosus = useMemo(()=>{
        return sosufinder();
    }, [input]);
    return <div>
        <input type="text" onChange={(e)=>{
            inputFunc(parseInt(e.currentTarget.value));
        }}/>
        {sosus.map(sosu=><span>{sosu} - </span>)}
    </div>;
};


// // 최종훅 => useDeferredValue -> state 훅들중 가장 마지막에 업데이트
// //           useTransition -> 훅들의 함수들중 가장 마지막에 호출
// // 우선순위 제어
// export default (props)=>{

//     let [value1, func1] = useState("값");
//     let [value2, func2] = useState("값2");

//     let [is, begin] = useTransition();
//     return <div>
//     <span>{value1}</span>
//     <span>{value2}</span>
//     <input type="text" onChange={(e)=>{
//         begin(()=>{
//             // e.currentTarget.style.backgroundColor="red";
//             func2("값2 + 1");
//         });
//         func1("값1 + 1");
//     }}></input>
//     </div>;

//     // let [value, func] = useState(0);
//     // let result = useDeferredValue(value);
//     // let [items, itemfunc] = useState([
//     //     "내용물 1 상 위",
//     //     "내용물 2 상 위",
//     //     "내용물 3 중 위",
//     //     "내용물 4 중 아래",
//     //     "내용물 5 하 아래",
//     //     "내용물 6 하 아래",
//     // ]);
//     // let [value, func2] = useState(0);
//     // let result = useDeferredValue(items);
//     // return <div>
//     //     <input type="text" onChange={(e)=>{
//     //         itemfunc(result.filter(item=>item.indexOf(e.currentTarget.value) > -1));
//     //     }}></input>
//     //     <ul style={{"listStyle":"none"}}>
//     //     {result.map(item=><div>{item}</div>)}
//     //     </ul>
//     //     <button onClick={()=>{func2(value + 1)}}>클릭</button>
//     // </div>
// };

// // useRef -> 리렌더링이 없는 변수를 생성해라 -> 대부분의 이유 -> DOM

// // export default (props)=>{
// //     // useRef -> useState기반의 기능
// //     // (default)=>{ return useState(default)[0];}
// //     let [value, func] = useState(0);
// //     // let [refvalue, reffunc] = useState(null);
// //     let refvalue = useRef();
// //     // func(document.querySelector("button"));
// //     // refvalue = document.querySelector("button");
// //     // refvalue.text = 5;
// //     return <div>
// //         {//<Progress width={30} value={10} ref={refvalue}/>
// //         }
// //         <div>{value}</div>
// //         <button ref={refvalue} onClick={()=>{
// //             func(value + 1);
// //             // refvalue -> 따로 할당
// //             refvalue.current.innerHTML = 5;
// //             // refvalue.innerHTML = 5;
// //         }}>클릭</button>
// //         <button onClick={()=>{value += 1}}>클릭</button>
// //     </div>
// // };

// // KIA LOL
// // KDA

// // 만드는 리액트 태그에 값의 변화에 의한 변동을 보여주는 정보
// // useMemo
// // 클로저를 이용해서 외부 변수의 값에 의해 변화하는 함수
// // ()=>{}
// // useCallback

// // export default (props)=>{
// //     let [value ,func] = useState(1000000000);
// //     let [value2, func2] = useState(0);
// //     let [progressValue, progressFunc] = useState(0);
// //     let progressResult = useMemo(()=>{
// //         return progressValue;
// //     }, [progressValue]);
// //     let count = useCallback(()=>{
// //         let result = 0;
// //         for(let i = 1; i < value / 2; i += 1){
// //             result += (value % i == 0 ? 1 : 0);
// //         }
// //         return result;
// //     }, [value]);
// //     let result = useMemo(()=>{
// //         return count();
// //     }, [value]);
    
// //     return <div>
// //         <Progress width={30} value={progressResult}/>
// //         <button onClick={()=>{progressFunc(progressValue - 1)}}>왼쪽</button>
// //         <button onClick={()=>{progressFunc(progressValue + 1)}}>오른쪽</button>
// //         <div>{value}</div>
// //         <div>{result}</div>
// //         <button onClick={()=>{func(value - 1)}}>클릭</button>
// //         <div>{value2}</div>
// //         <button onClick={()=>{func2(value2 - 1)}}>클릭2</button>
// //     </div>;
// // };