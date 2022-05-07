import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className='header'>
            <div className='appBar w-screen'>
                <h1 className='grow text-4xl font-bold'>Franz <span className="text-orange-600">R.</span></h1>
                <div>
                    <Link to='/'>About</Link>
                    <Link to='/Projects'>Projects</Link>
                    <Link to='/Contact'>Contact</Link>
                </div>
            </div>

        </div>
    )
}