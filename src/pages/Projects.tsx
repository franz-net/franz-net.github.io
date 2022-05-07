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
        <div className='min-h-screen'>
            <h1>PROJECTS</h1>
            {projects.map(project => {
                return (
                    project.name
                )
            })}
        </div>
    )
}