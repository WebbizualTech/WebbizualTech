import React, { useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';

import LukesLobster from '../assets/LukesLobster.jpeg';
import ElevatedTransmission from '../assets/ElevatedTransmission.jpeg';
import StylehubMakeover from '../assets/Stylhubmakeover.png';
import AglowShineMakeover from '../assets/aglowShineMakeover.jpeg';

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
        category: 'Web Development',
        title: 'Elevated Transmission',
        image: ElevatedTransmission,
        href: 'https://elevatedtransmission.com',
    },
    {
        category: 'Graphic Design',
        title: 'StyleHub Makeover',
        image: StylehubMakeover,
        href: 'https://dribbble.com/webbizualtech',
    },
];

const ProjectSlider = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const prevMouseY = useRef(0);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const currentY = e.clientY;
        const direction = currentY > prevMouseY.current ? 'down' : 'up';

        if (direction === 'down') {
            swiperRef.current?.slideNext();
        } else {
            swiperRef.current?.slidePrev();
        }

        prevMouseY.current = currentY;
    };

    return (
        <Box sx={{ width: '100%', py: 2 }} onMouseEnter={handleMouseEnter}>
            <Container maxWidth="xl">
                <Swiper
                    onSwiper={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                    speed={600}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2.2 },
                        1200: { slidesPerView: 3 },
                    }}
                    modules={[Pagination]}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    width: '100%',
                                    aspectRatio: '4 / 3',
                                    mt: 3,
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default ProjectSlider;
