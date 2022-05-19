import {Card, Col, Grid, Text} from "@nextui-org/react";

export default function ProjectCard({name, description, thumbnail}: any) {
    return (
        <Grid xs={12} md={6}>
            <Card clickable hoverable>
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
                <Card.Image
                    objectFit="cover"
                    width="100%"
                    height={140}
                    src={thumbnail}
                    alt={name}
                />

                <Text>{description}</Text>
            </Card>
        </Grid>
    )
}