import {Container, Grid, Text} from "@nextui-org/react";
import {ProjectCard} from "../components";

const projects = [
    {
        name: 'Smash-Studio',
        description: 'Tennis & Padel court tracker and management application. Still under active development',
        stack: 'Built on React(Typescript) and NodeJS',
        thumbnail: 'https://raw.githubusercontent.com/franz-net/franz-net.github.io/main/src/assets/smashStudio.png',
        live: "https://smash-studio.herokuapp.com/landing"
    },
    {
        name: 'Tic-Tac-Toe',
        description: 'Retro-styled Tic Tac Toe game, with multiple 80s and 90s references and some easter eggs.',
        stack: 'Built on HTML, CSS and JavaScript',
        thumbnail: 'https://raw.githubusercontent.com/franz-net/franz-net.github.io/main/src/assets/ticTacToe.png',
        live: "https://www.franz-e.net/tic-tac-toe/"
    },
    {
        name: 'Hold-My-Spot',
        description: 'Event reservation management system. Includes a QR code for checking into events.',
        stack: 'Built on Python(Flask) and JavaScript',
        thumbnail: "https://raw.githubusercontent.com/franz-net/franz-net.github.io/main/src/assets/holdmyspot.png",
        live: "https://hold-my-spot.herokuapp.com/"
    },
    {
        name: 'Laminar Tasks',
        description: 'To-do task tracker. Group project using Mob Programing. ',
        stack: 'Built on JavaScript and NodeJS',
        thumbnail: 'https://raw.githubusercontent.com/franz-net/franz-net.github.io/main/src/assets/laminar.png',
        live: "https://laminar-tasks.herokuapp.com/"
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