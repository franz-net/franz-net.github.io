import {ThemeSwitch} from "./index";

export default function Header() {
    return (
        <div>
            <div>
                <h1>Franz <span>R.</span></h1>
                <div>
                    <button>About</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
                <ThemeSwitch/>
            </div>

        </div>
    )
}