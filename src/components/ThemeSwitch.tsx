import {Switch} from "@nextui-org/react";
import useDarkMode from '@fisch0920/use-dark-mode';

export default function ThemeSwitch() {
    const darkMode = useDarkMode(false)
    return (
        <>
            <Switch checked={darkMode.value} onChange={() => darkMode.toggle()}/>
        </>
    )
}