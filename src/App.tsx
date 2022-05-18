import React from 'react';
import {Footer, Header} from "./components";
import {About, Contact, Projects} from "./pages";
import {Container, createTheme, NextUIProvider} from "@nextui-org/react";
import useDarkMode from "@fisch0920/use-dark-mode";

const fonts = {}

const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {}
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {}
    }
})


function App() {
    const darkMode = useDarkMode(false)
    return (
        <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
            <Container responsive>
                <Header/>
                <div></div>
                <main>
                    <About/>
                    <Projects/>
                    <Contact/>
                </main>
                <Footer/>
            </Container>
        </NextUIProvider>
    );
}

export default App;
