import React from 'react';
import {createRoot} from 'react-dom/client';
import {Await, RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Main from './main';
import Test from './test';
import Boards from './boards';
import Home from './home';
import MyPage from './mypage';

// fetch같이 비동기 동작


createRoot(document.querySelector("[RootContainer]"))
    .render(
        <RouterProvider
            router={
                createBrowserRouter(createRoutesFromElements(
                    <Route element={<Main/>}>
                        {/* <Await children={}/> */}
                        <Route path="/home/:wow?/a?/:two?" index element={<Home/>}/>
                        <Route path="/boards?" element={<Boards/>}/>
                        <Route path="/mypage" element={<MyPage/>}/>
                    </Route>
                    // <Route 
                    //     element={<Main/>}
                    // >
                    //     <Route path="/page/domain" element={<Test/>}/>
                    //     <Route path="/page/app" element={<Test/>}/>
                    //     <Route path="/page/base" element={<Test/>}/>
                    // </Route>


                    // <Route
                    //     path="/"
                    //     // index
                    //     // caseSensitive
                    //     element={<Main/>}
                    //     // errorElement={<div>Error</div>}
                    //     // lazy={()=>{}}
                    //     // loader={()=>{}}
                    //     // action={()=>{}}
                    // >
                    //     <Route path="/" index element={<div>index</div>} end/>
                    //     <Test/>
                    //     {/* <Route path="/a" element={<Test/>}> */}
                    //         {/* <Route path="/" index element={<div>a</div>}/> */}
                    //         {/* <Route path="/b" element={<div>a/b</div>}/> */}
                    //     {/* </Route> */}
                    //     {/* <Route path="/a/b" element={<div>a/b</div>}/> */}
                    //     <Route path="/b" element={<div>b</div>}/>
                    // </Route>
                ))
            }
            fallbackElement={<div>ee</div>}
        />
    );