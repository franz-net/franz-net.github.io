import {Container, Grid, Text} from "@nextui-org/react";
import {ProjectCard} from "../components";

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
        thumbnail: "https://raw.githubusercontent.com/franz-net/franz-net.github.io/main/src/assets/holdmyspot.png"
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
                        <ProjectCard key={index} {...project}/>
                    )
                })}
            </Grid.Container>
        </Container>
    )
}