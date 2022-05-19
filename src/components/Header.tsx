import {ThemeSwitch} from "./index";
import {Container, Text} from "@nextui-org/react";

export default function Header() {
    return (
        <Container display='flex' justify='space-between' alignItems='center' css={{padding: 0}}>

            <Text
                h1
                margin='0'
                size={80}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%"
                }}>
                Franz R.
            </Text>
            {/*
            <div>
                <Button>About</Button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
            */}
            <ThemeSwitch/>


        </Container>
    )
}