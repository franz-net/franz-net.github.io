import {Col, Container, Row, Text} from "@nextui-org/react";

export default function About() {
    return (
        <Container
            responsive
            display='flex'
            alignItems='center'
            justify='space-around'
            css={{
                height: '100vh'
            }}
            gap={0}
        >
            <Row>
                <Col>
                    <Text size={50}>
                        Hello!<br/>
                        I am Franz, a
                        <Text
                            span
                            css={{textGradient: "45deg, $yellow600 -20%, $red600 100%"}}
                            weight="bold"
                            size={60}
                        >
                            Full Stack Software Engineer!
                        </Text>
                    </Text>
                    <Text>
                        I am based out of Austin Texas and I love to create interactive and responsive web apps!
                    </Text>
                </Col>
            </Row>
        </Container>
    )
}