import {Card, Col, Container, Grid, Text} from "@nextui-org/react";
import holdMySpot from '../assets/holdmyspot.png'

const projects = [
    {
        name: 'Smash-Studio',
        description: 'Tennis & Padel court tracker and management application',
        stack: 'MERN',
        thumbnail: ''
    },
    {
        name: 'Tic-Tac-Toe',
        description: 'Retro-styled Tic Tac Toe game, with multiple 80s and 90s references and some easter eggs',
        stack: 'JavaScript, HTML, CSS',
        thumbnail: ''
    },
    {
        name: 'Hold-My-Spot',
        description: 'Event and class reservation management system',
        stack: 'Python (Flask)',
        thumbnail: {holdMySpot}
    },
    {
        name: 'Laminar Tasks',
        description: 'Group project TO-DO list',
        stack: 'NodeJS (Express), JavaScript',
        thumbnail: ''
    }
]

export default function Projects() {
    return (
        <Container fluid display='flex'>
            <Text h2 css={{mx: 0, my: 3}}>Projects</Text>
            <Grid.Container gap={2}>
                {projects.map((project: any, index: number) => {
                    console.log(project.thumbnail)
                    return (
                        <Grid key={index} xs={12} md={6}>
                            <Card clickable hoverable>
                                <Card.Header
                                    css={{
                                        position: "absolute",
                                        zIndex: 1,
                                        top: 0,
                                        bgBlur: '#0f1114'
                                    }}>
                                    <Col>
                                        <Text h3 color="white">{project.name}</Text>
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    objectFit="cover"
                                    width="100%"
                                    height={140}
                                    src={project.thumbnail}
                                    alt={project.name}
                                />

                                <Text>{project.description}</Text>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid.Container>
        </Container>
    )
}