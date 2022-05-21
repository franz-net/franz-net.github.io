import {Container, Text} from "@nextui-org/react";

export default function About() {
    return (
        <Container>
            <Text size={30}>
                Hello there!
                I am Franz, a
                <Text
                    span
                    css={{textGradient: "45deg, $yellow600 -20%, $red600 100%"}}
                    weight="bold"
                    size={50}
                >
                    Full Stack Software Engineer!
                </Text>
            </Text>
            <Text>
                I am based out of Austin Texas and I love to create interactive and responsive web apps!
            </Text>
        </Container>
    )
}