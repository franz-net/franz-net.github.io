import {Switch, useTheme} from "@nextui-org/react";
import useDarkMode from '@fisch0920/use-dark-mode';

export default function ThemeSwitch() {
    const darkMode = useDarkMode(false)
    const {type, isDark} = useTheme()
    return (
        <>
            <Switch checked={darkMode.value} onChange={() => darkMode.toggle()}/>
        </>
    )
}