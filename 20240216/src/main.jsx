import React from 'react';
import {Route, Outlet, Routes, NavLink} from 'react-router-dom';
import Test from './test';

export default ()=>{
    return <div>
        <header>
            <navigator>
                <NavLink to="/home">Home</NavLink>&nbsp;
                <NavLink to="/boards">Boards</NavLink>&nbsp;
                <NavLink to="/mypage">MyPage</NavLink>&nbsp;
            </navigator>
        </header>
        <Outlet/>
        <footer>내용내용내용</footer>
    </div>
}