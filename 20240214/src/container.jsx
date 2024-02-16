import React from 'react';

export default (props)=>{
    let style = {
        display:"inline-block",
        width:"300px"
    };
    let datas = [
        "검색 내용 1 상 위",
        "검색 내용 2 상 위",
        "검색 내용 3 중 위",
        "검색 내용 4 중 아래",
        "검색 내용 5 하 아래",
        "검색 내용 6 하 아래"
    ];
    return <div style={style}>
        <ul>
            {
                datas
                .filter(data=>data.indexOf(props.searchValue) > -1)
                .map(data=><li>{data}</li>)
            }
        </ul>
    </div>
}