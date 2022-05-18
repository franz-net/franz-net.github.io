import {ThemeSwitch} from "./index";
import {Container, Text} from "@nextui-org/react";

export default function Header() {
    return (
        <Container display='flex' justify='space-between' css={{padding: 0}}>

            <Text h1 margin='0' css={{
                pr: 0,
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}>
                Franz R.
            </Text>
            <div>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
            <ThemeSwitch/>


        </Container>
    )
}