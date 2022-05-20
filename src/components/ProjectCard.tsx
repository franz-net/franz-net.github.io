import {Card, Col, Grid, Text} from "@nextui-org/react";

export default function ProjectCard({name, description, stack, thumbnail, live}: any) {
    return (
        <Grid xs={12} md={6}>
            <Card cover clickable hoverable onClick={() => window.open(live, '_blank')}>
                <Card.Header
                    css={{
                        position: "absolute",
                        zIndex: 1,
                        top: 0,
                        bgBlur: '#0f1114'
                    }}>
                    <Col>
                        <Text h3 color="white">{name}</Text>
                    </Col>
                </Card.Header>
                <Card.Body>
                    <Card.Image
                        objectFit="cover"
                        width="100%"
                        height={400}
                        src={thumbnail}
                        alt={name}
                    />
                </Card.Body>
                <Card.Footer
                    blur
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,

                    }}
                >
                    <Col>
                        <Text color="black">{description}</Text>
                    </Col>
                </Card.Footer>

            </Card>
        </Grid>
    )
}