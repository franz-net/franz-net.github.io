import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About, Contact, Layout, Projects} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<About/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
                <Route path='*' element={<h1>404!!</h1>}/>
            </Routes>


        </BrowserRouter>
    );
}

export default App;
