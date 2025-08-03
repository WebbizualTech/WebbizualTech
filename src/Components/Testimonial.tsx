import React, { useRef } from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';

const testimonials = [
    {
        quote: `Webbizual delivered excellent results on multiple Amazon Seller Store projects. Communication was smooth, tasks were completed promptly, and their skills were top-notch. We look forward to working with them again.`,
        name: 'Lukes Lobster',
        title: 'Website Developer',
        rating: 5
    },
    {
        quote: `The team worked faster than we could assign tasks. Although our contract has ended for now, we look forward to working with them again on future Amazon-related projects. Their efficiency and professionalism made a lasting impression.`,
        name: 'Cindy',
        title: 'Amazon Seller',
        rating: 4
    },
    {
        quote: `They designed beautiful, eye-catching posters for our beauty parlour that perfectly matched our brand. The creativity, attention to detail, and quick turnaround exceeded our expectations. Highly recommended for salon and beauty branding!`,
        name: 'Stylehub Makeover',
        title: 'Graphic Designs Poster',
        rating: 5
    },
    {
        quote: `They built a powerful e-commerce platform for our business with smooth navigation and secure checkout. Sales have increased since launch, truly impressed with their work.`,
        name: 'Elevated Transmission',
        title: 'Web Development',
        rating: 4
    },
];

const TestimonialSlider = () => {
    const swiperRef = useRef(null);
    const prevMouseY = useRef(0);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const currentY = e.clientY;
        const direction = currentY > prevMouseY.current ? 'down' : 'up';

        if (swiperRef.current) {
            if (direction === 'down') {
                swiperRef.current.slideNext();
            } else {
                swiperRef.current.slidePrev();
            }
        }

        prevMouseY.current = currentY;
    };

    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 5, md: 5 }, bgcolor: 'rgba(31, 65, 174, 1)' }}>
            <Grid container spacing={6} justifyContent='space-between'>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: '#fff',
                            fontSize: 16,
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            letterSpacing: 1,
                            mb: 1,
                            fontFamily: 'Plus Jakarta Sans',
                        }}
                    >
                        What Our Clients Say
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: 28, sm: 34, md: 42 },
                            lineHeight: 1.4,
                            color: '#fff',
                            fontFamily: 'Plus Jakarta Sans',
                            mb: 4,
                        }}
                    >
                        Trusted by Businesses,<br />Loved for Our Work
                    </Typography>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: 14, sm: 16, md: 16 },
                            color: '#fff',
                            maxWidth: 625,
                            fontFamily: 'Plus Jakarta Sans',
                            lineHeight: 1.7,
                        }}
                    >
                        We take pride in building long-lasting partnerships through great design, clear communication, and reliable delivery. Here’s what some of our clients have to say about their experience working with Webbizual. From startups to growing brands, we’ve helped bring visions to life, and the results speak for themselves.
                    </Typography>
                </Grid>
            </Grid>

            {/* Testimonial Swiper */}
            <Box onMouseEnter={handleMouseEnter} sx={{ mt: { xs: 5, md: 3 }, position: 'relative' }}>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    speed={600}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.custom-swiper-pagination',
                    }}
                    breakpoints={{
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3.4 },
                        1600: { slidesPerView: 4 },
                    }}
                    style={{ padding: '0 10px' }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'stretch',
                                height: '100%',
                            }}
                        >
                            <Paper
                                elevation={8}
                                sx={{
                                    width: '100%',
                                    maxWidth: 480,
                                    minHeight: 360,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    borderRadius: 4,
                                    p: 3,
                                    flex: 1,
                                    backgroundColor: '#fff',
                                }}
                            >
                                {/* Top quote icon */}
                                <Typography
                                    variant="h3"
                                    fontWeight={700}
                                    color="#d1cfff"
                                    sx={{
                                        fontSize: 100,
                                        lineHeight: '70px',
                                        mb: 1.5, // Reduced bottom margin
                                    }}
                                >
                                    “
                                </Typography>

                                {/* Main quote text */}
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: 16,
                                            fontFamily: 'Plus Jakarta Sans',
                                            lineHeight: 1.6,
                                            mb: 2,
                                        }}
                                    >
                                        {item.quote}
                                    </Typography>
                                </Box>

                                {/* Star rating */}
                                <Box display="flex" alignItems="center" mb={1}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            sx={{
                                                color: i < item.rating ? '#ffb400' : '#ddd',
                                                fontSize: 20,
                                                lineHeight: '1.5',
                                                mr: 0.5,
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Name and title */}
                                <Box>
                                    <Typography
                                        fontWeight={700}
                                        sx={{
                                            fontSize: 22,
                                            color: 'rgba(31, 65, 174, 1)',
                                            fontFamily: 'Plus Jakarta Sans',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: 'Plus Jakarta Sans',
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Paper>
                        </SwiperSlide>

                    ))}
                </Swiper>

                <Box sx={{ mt: 4 }}>
                    <div className="custom-swiper-pagination" style={{ textAlign: 'center' }} />
                </Box>
            </Box>
        </Container>
    );
};

export default TestimonialSlider;
