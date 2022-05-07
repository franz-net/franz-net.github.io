export default function Header() {
    return (
        <div className='header z-10'>
            <div className='appBar'>
                <h1 className='grow text-4xl font-bold'>Franz <span className="text-orange-600">R.</span></h1>
                <div>
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>

        </div>
    )
}