import { Box, Typography, Button, Container, Grid } from '@mui/material';

import LukesLobster from '../assets/LukesLobster.webp';
import StylehubMakeover from '../assets/Stylhubmakeover.webp';
import AglowShineMakeover from '../assets/aglowShineMakeover.webp';

const projects = [
    {
        category: 'Web Development',
        title: 'Lukes Lobster',
        image: LukesLobster,
        href: 'https://lukeslobster.com',
    },
    {
        category: 'Graphic Design',
        title: 'Aglow Shine Makeover',
        image: AglowShineMakeover,
        href: 'https://dribbble.com/webbizualtech',
    },
    {
        category: 'Graphic Design',
        title: 'StyleHub Makeover',
        image: StylehubMakeover,
        href: 'https://dribbble.com/webbizualtech',
    },
];

const ProjectSlider = () => {
    return (
        <Box sx={{ width: '100%', py: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ md: 4, sm: 6, xs: 12 }} key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    width: '100%',
                                    aspectRatio: '4 / 3',
                                    mt: 1,
                                }}
                            >
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'block', width: '100%', height: '100%' }}
                                >
                                    <Box
                                        component="img"
                                        src={project.image}
                                        alt={project.title}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease',
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            p: 3,
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            color="white"
                                            sx={{
                                                fontSize: '15px',
                                                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                                                mb: 1,
                                            }}
                                        >
                                            {project.category}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="white"
                                            fontWeight="bold"
                                            sx={{
                                                fontSize: '26px',
                                                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                                                mb: 1,
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Button
                                            variant="text"
                                            sx={{
                                                color: '#fff',
                                                mt: 2,
                                                textTransform: 'none',
                                                fontFamily: `'Plus Jakarta Sans', sans-serif`,
                                            }}
                                        >
                                            Read more →
                                        </Button>
                                    </Box>
                                </a>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ProjectSlider;
