import React from 'react';
import {Outlet, Route, Routes, Link, NavLink} from 'react-router-dom';
export default (props)=>{
    return <div>
        <NavLink to="/page/domain" 
        style={({})=>{
            return {};
        }}
        className={({isActive, isPending, isTransitioning})=>{
            // isActive -> 경로가 동일하냐?
            // isPending -> 현재 보류중이냐
            // isTransitioning -> 변환중이냐
            return isActive ? "active" : "what";
        }}
        relative='path' preventScrollReset={true} replace={false}>A</NavLink>&nbsp;&nbsp;
        <NavLink to=".." relative='path' >B</NavLink>
    </div>
    // return <Route {...props} path="/a" element={<div>a</div>}/>
}