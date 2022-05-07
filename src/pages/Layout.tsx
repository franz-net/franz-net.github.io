import {Footer, Header} from "../components";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-screen">
            <Header/>
            <main className='flex justify-center items-center'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}