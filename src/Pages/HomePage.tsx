import React from 'react';
import {
    Box, Typography, Grid, Card, Button, Container, Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import heroImage from "../assets/LandingPageImage.webp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WebDevService from '../assets/WebDevService.webp';
import MobileAppService from '../assets/mobileAppService.webp';
import GraphicDesignService from '../assets/GraphicDesignService.webp';
import EcomService from '../assets/EcomService.webp';
import backgroundPattern from '../assets/16367386_rm380-12.webp';
import portfolioImage from '../assets/work-image-1-768x512.webp';
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer';
import AboutSection from '../Components/About';
import ProjectSection from "../Components/Project"
import { FadeInOnView } from '../Components/FadeInOnView';
import ResponsiveAppBar from '../Components/NavBar'
import TopNavBar from '../Components/TopNavBar';

const services = [
    {
        title: 'UI/UX Design',
        image: MobileAppService,
        description:
            'Intuitive and modern designs that deliver smooth, user-focused experiences across web and mobile.',
        subServices: ['Website', 'Responsive', 'Mobile App'],
    },
    {
        title: 'Website Development',
        image: WebDevService,
        description:
            'Custom-built, fast-loading websites that work perfectly on every device and bring your brand to life.',
        subServices: ['Static', 'Responsive', 'WordPress', 'Shopify'],
    },
    {
        title: 'Graphic Designing',
        image: GraphicDesignService,
        description:
            'Striking visuals and creative designs that make your brand look polished, professional, and unforgettable.',
        subServices: ['Poster & Banners', 'Product Image', 'Photoshop Retouch'],
    },
    {
        title: 'Ecommerce Catalogue',
        image: EcomService,
        description:
            'Well-organized, high-converting product catalogs that boost online visibility and drive more sales.',
        subServices: ['Product Listing', 'Product Optimization', 'EBC Content Creation'],
    },
];

const ServiceCard = styled(Card)(() => ({
    position: 'relative',
    height: 360,
    borderRadius: 12,
    boxShadow: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover .hoverContent': {
        opacity: 1,
        pointerEvents: 'auto',
    },
    '&:hover .circle': {
        opacity: 0,
        transform: 'scale(0.95)',
    },
    '&:hover .darkOverlay': {
        opacity: 1,
    },
}));

const CircleOverlay = styled(Box)(() => ({
    backgroundColor: 'rgba(31, 65, 174, 0.85)',
    color: '#fff',
    width: 180,
    height: 180,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    position: 'relative',
    transition: 'all 0.3s ease',
}));

const HoverContent = styled(Box)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    textAlign: 'left',
    width: '100%',
    maxWidth: '230px'
}));

interface FeatureItem {
    image: string;
    title: string;
    description: string;
}

const features: FeatureItem[] = [
    {
        image: portfolioImage,
        title: 'Think User-First',
        description: 'Craft intuitive UI/UX for great user journeys.',
    },
    {
        image: portfolioImage,
        title: 'Code It Right',
        description: 'Build responsive, high-performance websites.',
    },
    {
        image: portfolioImage,
        title: 'Make It Pop',
        description: 'Create bold, consistent graphic assets.',
    },
    {
        image: portfolioImage,
        title: 'Sell Smart',
        description: 'Organize products for smooth online shopping.',
    },
];


const HomePage: React.FC = () => {
    return (
        <>
            <TopNavBar />
            <ResponsiveAppBar />
            {/* HERO SECTION */}
            <Box
                component="section"
                id="home"
                sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: { xs: '80vh', sm: '90vh', md: '95vh', lg: '100vh' },
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, sm: 4, md: 6 }, // horizontal padding
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: 'rgba(31, 65, 174, 0.75)',
                        zIndex: 1,
                    }}
                />

                {/* Hero Content */}
                <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
                    <FadeInOnView>
                        <Grid container alignItems="center">
                            <Grid size={{ md: 8, xs: 12 }}>
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    mb={2}
                                    sx={{
                                        fontSize: {
                                            xs: '24px',
                                            sm: '30px',
                                            md: '38px',
                                            lg: '42px',
                                            xl: '52px',
                                        },
                                        fontFamily: "Plus Jakarta Sans",
                                        lineHeight: 1.2,
                                        maxWidth: '525px'
                                    }}
                                >
                                    We Build Websites That Build Your Business
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
                                        fontFamily: "Plus Jakarta Sans",
                                        lineHeight: 1.8,
                                        maxWidth: { xs: "78%", md: "525px" },
                                        mb: 3,
                                    }}
                                >
                                    We craft custom, responsive websites tailored to your brand and goals.
                                    From stunning visuals to smooth functionality, we turn ideas into high-converting digital experiences.
                                    Let’s build something that works hard for your business.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontSize: "15px",
                                        padding: "14px 20px",
                                        display: "flex",
                                        alignItems: "center",
                                        fontFamily: "Plus Jakarta Sans, sans-serif",
                                        fontWeight: 700,
                                        textTransform: "capitalize",
                                        gap: 1,
                                        color: "#fff",
                                        backgroundColor: "#1f41ae",
                                        border: "none",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "#1f41ae",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    Discover More
                                    <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </FadeInOnView>
                </Container>
            </Box>


            {/* Our Services Section */}
            <Box
                sx={{
                    bgcolor: '#fafafa',
                    color: '#fff',
                    py: { xs: 5, md: 10 },
                    px: { xs: 2, sm: 4, md: 5 },
                }}
                id="services"
            >
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 4, md: 10 }}>
                        <Grid size={{ md: 6, xs: 12 }}>
                            <FadeInOnView>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: 'rgba(31, 65, 174, 1)',
                                        fontSize: 16,
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        mb: 1,
                                        fontFamily: 'Plus Jakarta Sans',
                                    }}
                                >
                                    What we're offering
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: {
                                            xs: '24px',
                                            sm: '30px',
                                            md: '36px',
                                            lg: '42px',
                                        },
                                        lineHeight: 1.4,
                                        color: 'rgba(31, 65, 174, 1)',
                                        fontFamily: 'Plus Jakarta Sans',
                                        maxWidth: '525px'
                                    }}
                                >
                                    Everything You Need to Grow Online
                                </Typography>
                            </FadeInOnView>
                        </Grid>

                        <Grid size={{ md: 6, xs: 12 }}>
                            <FadeInOnView>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: { xs: 14, sm: 16 },
                                        maxWidth: 600,
                                        textAlign: 'left',
                                        fontFamily: 'Plus Jakarta Sans',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    We bring your digital vision to life through creative design and smart development.
                                    Our team delivers user-first websites, stunning graphics, and custom eCommerce solutions that help your business grow online.
                                    Whether you're starting from scratch or scaling up, we’ve got the tools to make it happen.
                                </Typography>
                            </FadeInOnView>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="xl">
                    <Grid container spacing={4} mt={{ xs: 4, md: 6 }}>
                        {services.map((service, i) => (
                            <Grid
                                key={i}
                                size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
                            >
                                <FadeInOnView delay={i * 0.4}>
                                    <ServiceCard
                                        sx={{
                                            backgroundImage: `url(${service.image})`,
                                            backgroundSize: 'cover',
                                            backgroundColor: '#000',
                                            backgroundPosition: 'center',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            overflow: 'hidden',
                                            minHeight: { xs: 240, sm: 280, md: 300 },
                                        }}
                                    >
                                        {/* Circle Overlay */}
                                        <CircleOverlay className="circle">
                                            <Typography
                                                fontWeight="bold"
                                                fontSize={22}
                                                align="center"
                                                sx={{ fontFamily: 'Plus Jakarta Sans' }}
                                            >
                                                {service.title}
                                            </Typography>
                                        </CircleOverlay>

                                        {/* Hover Content */}
                                        <HoverContent className="hoverContent">
                                            <Typography
                                                variant="h5"
                                                fontWeight="bold"
                                                gutterBottom
                                                sx={{ fontFamily: 'Plus Jakarta Sans' }}
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{ mb: 2, fontFamily: 'Plus Jakarta Sans' }}
                                            >
                                                {service.description}
                                            </Typography>
                                            <Divider sx={{ borderColor: 'rgba(255,255,255,0.5)', mb: 1 }} />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px',
                                                    mt: 2,
                                                }}
                                            >
                                                {service.subServices?.map((sub, index) => (
                                                    <Typography
                                                        key={index}
                                                        variant="body2"
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            fontSize: 14,
                                                            color: '#fff',
                                                            fontFamily: 'Plus Jakarta Sans',
                                                        }}
                                                    >
                                                        {sub}
                                                        {index !== service.subServices.length - 1 && (
                                                            <Box
                                                                component="span"
                                                                sx={{ mx: 1, fontSize: 16 }}
                                                            >
                                                                ·
                                                            </Box>
                                                        )}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </HoverContent>

                                        {/* Dark Overlay */}
                                        <Box
                                            className="darkOverlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: 'rgba(0,0,0,0.5)',
                                                zIndex: 1,
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        />
                                    </ServiceCard>
                                </FadeInOnView>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <AboutSection />
            {/* Project Section */}
            <Box
                id="portfolio"
                sx={{
                    position: 'relative',
                    py: { xs: 6, md: 6 },
                    px: { xs: 2, md: 6 },
                    backgroundColor: 'rgb(31, 65, 174)',
                    backgroundImage: `url(${backgroundPattern})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(31, 65, 174, 1)',
                        zIndex: -1,
                    },
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid size={{ md: 6, xs: 12 }} sx={{ justifyContent: 'space-between' }}>
                            <FadeInOnView>
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
                                    Our Work, Your Success
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '24px', sm: '32px', md: '42px' },
                                        lineHeight: 1.4,
                                        color: '#fff',
                                        fontFamily: 'Plus Jakarta Sans',
                                    }}
                                >
                                    Projects That Blend <br />Creativity with Purpose
                                </Typography>
                            </FadeInOnView>
                        </Grid>

                        <Grid size={{ md: 6, xs: 12 }}>
                            <FadeInOnView>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: 14, sm: 16 },
                                        color: '#fff',
                                        maxWidth: 625,
                                        lineHeight: 1.7,
                                        fontFamily: 'Plus Jakarta Sans',
                                    }}
                                >
                                    We don't just design, we solve real business problems through creative and technical execution. Here’s a glimpse into our recent work, from custom websites to brand-defining graphic designs. Each project is crafted with care, backed by strategy, and built to deliver results.
                                </Typography>
                            </FadeInOnView>
                        </Grid>
                    </Grid>
                </Container>
                <ProjectSection />
            </Box>
            {/* Work Process */}
            <Box sx={{ bgcolor: '#fafafa', color: '#fff', py: { xs: 5, md: 10 }, px: { xs: 2, sm: 4, md: 5 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        <Grid size={{ md: 6, xs: 12 }}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: 'rgba(31, 65, 174, 1)',
                                    fontSize: 16,
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    mb: 1,
                                    fontFamily: 'Plus Jakarta Sans',
                                }}
                            >
                                The Way We Build
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '24px', sm: '32px', md: '42px' },
                                    lineHeight: 1.4,
                                    color: 'rgba(31, 65, 174, 1)',
                                    fontFamily: 'Plus Jakarta Sans',
                                    mb: { xs: 3, md: 6 },
                                }}
                            >
                                A Simple Process That <br />Delivers Results
                            </Typography>
                        </Grid>

                        <Grid size={{ md: 6, xs: 12 }}>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    fontSize: { xs: 14, sm: 16 },
                                    maxWidth: 600,
                                    fontFamily: 'Plus Jakarta Sans',
                                    lineHeight: 1.7,
                                }}
                            >
                                We follow a clear and collaborative process that ensures every project is built with precision and purpose.
                                From modern design concepts to smooth development and timely delivery, we focus on creating results that meet
                                your vision and engage your users. The great work starts with a great process.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 0 } }}>
                    <Grid
                        container
                        spacing={{ xs: 4, sm: 4, md: 6 }}
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                    >
                        {features.map((feature, index) => (
                            <Grid
                                size={{ md: 3, xs: 6, sm: 6 }}
                                key={index}
                                textAlign="center"
                                position="relative"
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: { xs: 120, sm: 140, md: 180 },
                                        height: { xs: 120, sm: 140, md: 180 },
                                        mx: 'auto',
                                        overflow: 'hidden',
                                        mb: 4,
                                        borderRadius: '50%',
                                    }}
                                >
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                    color="#1F4186"
                                    sx={{
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontSize: { xs: 18, sm: 20, md: 23 },
                                    }}
                                >
                                    {feature.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        maxWidth: 220,
                                        mx: 'auto',
                                        mt: 1,
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontSize: { xs: 13, sm: 14, md: 16 },
                                    }}
                                >
                                    {feature.description}
                                </Typography>

                                {/* Only show arrow on large screens (lg and up) */}
                                {index < features.length - 1 && (
                                    <Box
                                        sx={{
                                            display: { xs: 'none', md: 'none', lg: 'block' },
                                            position: 'absolute',
                                            top: '30%',
                                            right: '-40px',
                                            width: '50px',
                                            height: '1px',
                                            borderTop: '2px dashed #1F4186',
                                            transform: 'translateY(-50%)',
                                        }}
                                    >
                                        <ArrowForwardIcon
                                            sx={{
                                                position: 'absolute',
                                                right: '-16px',
                                                top: '-12px',
                                                fontSize: 24,
                                                color: '#1F4186',
                                                backgroundColor: '#f9f9f9',
                                            }}
                                        />
                                    </Box>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </Box>

            <Testimonial />
            {/* Blog Section */}
            {/* < Box sx={{ bgcolor: '#f1f1f1', color: '#fff', py: { xs: 5, md: 10 }, px: { xs: 2, sm: 4, md: 5 } }}>
                <Container maxWidth='xl'>
                    <Grid container spacing={12}>
                        <Grid size={{ md: 7, xs: 12 }}>
                            <FadeInOnView>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: 'rgba(31, 65, 174, 1)',
                                        fontSize: 16,
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        mb: 1,
                                        fontFamily: 'Plus Jakarta Sans',
                                    }}
                                >
                                    WHAT WE'RE SHARING
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { md: '42px', sm: '28px', xs: '24px' },
                                        lineHeight: 1.2,
                                        color: 'rgba(31, 65, 174, 1)',
                                        fontFamily: 'Plus Jakarta Sans',
                                        mb: { xs: 3, md: 5 }
                                    }}
                                >
                                    Insights we’re delivering<br></br>
                                    to our readers
                                </Typography>
                            </FadeInOnView>
                        </Grid>

                        <Grid size={{ md: 6, xs: 12 }}>
                            <FadeInOnView>
                                <Typography
                                    variant='body1' color='text.secondary'
                                    sx={{
                                        fontSize: 16,
                                        maxWidth: 600,
                                        // mt: { xs: 3, md: 2 },
                                        fontFamily: 'Plus Jakarta Sans',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    There are countless sources of design inspiration and tech news, but we focus on curating meaningful articles—crafted with real experiences, creative thoughts, and practical solutions tailored for modern creators and businesses.
                                </Typography>
                            </FadeInOnView>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='xl'>
                    <Grid container spacing={4}>

                        {projects.map((project, index) => (
                            <Grid size={{ md: 4, xs: 12, sm: 6 }} key={index}>
                                <FadeInOnView>
                                    <Card
                                        sx={{
                                            bgcolor: '#fafafa',
                                            borderRadius: 5,
                                            overflow: 'hidden',
                                            height: '450px',
                                            color: 'rgba(31, 65, 174, 1)',
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={project.image}
                                            alt={project.title}
                                            sx={{
                                                borderRadius: 4,
                                                height: 250,
                                                objectFit: 'cover',
                                                // mb: 0.5,
                                            }}
                                        />
                                        <CardContent sx={{ px: 1 }}>
                                            <Typography variant="h6" fontWeight={500} color="textSecondary"
                                                sx={{
                                                    fontFamily: 'plus Jakarta Sans',
                                                    fontSize: '15px',
                                                    border: '1px solid #ddd',
                                                    display: 'inline-block',
                                                    padding: '10px',
                                                    borderRadius: '25px',
                                                    mb: 1
                                                }}
                                            >
                                                {project.category}
                                            </Typography>
                                            <Typography variant="h5" fontWeight={700}
                                                sx={{
                                                    fontFamily: 'plus Jakarta Sans',
                                                }}
                                            >
                                                {project.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="textSecondary"
                                                mt={1}
                                                sx={{
                                                    fontFamily: 'plus Jakarta Sans',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </FadeInOnView>
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </Box > */}

            <Footer />


        </>
    );
};

export default HomePage;
