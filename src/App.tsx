import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {About, Contact, Layout, Projects} from "./pages";

function App() {
    return (
        <HashRouter basename='/'>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<About/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
                <Route path='*' element={<h1>404!!</h1>}/>
            </Routes>


        </HashRouter>
    );
}

export default App;
