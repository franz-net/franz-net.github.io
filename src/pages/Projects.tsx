import {Card, Container, Grid, Text} from "@nextui-org/react";

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
        thumbnail: ''
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
            <h1>PROJECTS</h1>
            <Grid.Container gap={2}>
                {projects.map((project: any, index: number) => {
                    return (
                        <Grid xs={12} md={6}>
                            <Card key={index} clickable hoverable>
                                <Text h3>{project.name}</Text>
                                <Text>{project.description}</Text>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid.Container>
        </Container>
    )
}