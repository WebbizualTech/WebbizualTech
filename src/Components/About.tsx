import {
    Box,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import AboutMainImg from '../assets/AboutMainImage.jpg';

const AboutSection = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, sm: 8, md: 10 },
                backgroundColor: '#f1f1f1',
            }}
            id="about"
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* LEFT: Image */}
                    <Grid size={{ md: 6, xs: 12 }} sx={{ position: 'relative' }}>
                        <Box
                            component="img"
                            src={AboutMainImg}
                            alt="Team at work"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 5,
                                maxHeight: { xs: 280, sm: 400, md: 480, lg: 525 },
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>

                    {/* RIGHT: Text Content */}
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgb(31, 65, 174)',
                                    fontSize: 16,
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    mb: 1,
                                    fontFamily: 'Plus Jakarta Sans',
                                }}
                            >
                                Who We Are
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: {
                                        xs: '24px',
                                        sm: '30px',
                                        md: '36px',
                                        lg: '42px',
                                    },
                                    lineHeight: 1.4,
                                    color: 'rgb(31, 65, 174)',
                                    fontFamily: 'Plus Jakarta Sans',
                                    mb: 2,
                                }}
                            >
                                Designing with Vision, <br />Developing with Impact
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '14px', sm: '15px', md: '16px' },
                                    fontFamily: 'Plus Jakarta Sans',
                                    lineHeight: 1.7,
                                    color: 'rgba(0,0,0,0.7)',
                                    mb: 2,
                                    maxWidth: { xs: '100%', md: '525px' },
                                }}
                            >
                                At Webbizual Technologies, we blend creativity, strategy, and technology to build digital experiences that make an impact. From intuitive UI/UX design to custom web development and branding, our work is focused on helping businesses create a strong online presence. We believe in meaningful design — where every pixel, color, and code serves a purpose.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '14px', sm: '15px', md: '16px' },
                                    fontFamily: 'Plus Jakarta Sans',
                                    lineHeight: 1.7,
                                    color: 'rgba(0,0,0,0.7)',
                                    maxWidth: { xs: '100%', md: '525px' },
                                }}
                            >
                                We’re not just developers or designers — we’re problem solvers who care about your goals. Whether you're a startup, a growing business, or an established brand, we tailor every solution to your needs. Our approach is collaborative, transparent, and built on delivering value through quality work and consistent results. At Webbizual, we design with intent and develop with heart.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutSection;
