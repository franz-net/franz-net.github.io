import React from 'react';
import {Footer, Header} from "./components";
import {About, Contact, Projects} from "./pages";

function App() {
    return (
        <div className="h-screen">
            <Header/>
            <div className='h-20'></div>
            <main className='flex flex-col justify-center items-center'>
                <About/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
