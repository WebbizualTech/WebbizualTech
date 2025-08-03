import {
    Box,
    Container,
    Grid,
    Typography,
    // useMediaQuery,
    // useTheme,
    Divider,
    Link
} from '@mui/material';

import Logo from '../assets/WebbizualLogo.webp';

const FooterSection = () => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            id='footer'
            sx={{
                backgroundColor: 'rgb(31, 65, 174)',
                color: '#fff',
                mt: 10,
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 5, sm: 6, md: 4 }
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={5}
                    justifyContent="space-between"
                    alignItems="flex-start"
                    textAlign={{ xs: 'center', sm: 'left' }}
                >
                    {/* Logo & Description */}
                    <Grid size={{ md: 5, xs: 12, sm: 12 }}>
                        <Box
                            sx={{
                                mb: 2,
                                display: 'flex',
                                justifyContent: { xs: 'center', sm: 'flex-start' }
                            }}
                        >
                            <img
                                src={Logo}
                                alt="Webbizual Logo"
                                style={{
                                    height: 70,
                                    transition: 'all 0.3s ease-in-out',
                                    background: 'transparent'
                                }}
                            />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: 16,
                                lineHeight: 1.7,
                                maxWidth: '100%',
                                fontFamily: 'Plus Jakarta Sans'
                            }}
                        >
                            There are many variations of simply free text passages available, but the majority
                            have suffered alteration in some form by injected humour or randomised words.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ md: 2, xs: 6, sm: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}
                        >
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8, textDecoration: 'none' }}>
                            <Link href="/" color='inherit' sx={{ textDecoration: 'none' }}>Home</Link>
                            <Link href="#about" color='inherit' sx={{ textDecoration: 'none' }}>About Us</Link>
                            <Link href="#services" color='inherit' sx={{ textDecoration: 'none' }}>Services</Link>
                            <Link href="#portfolio" color='inherit' sx={{ textDecoration: 'none' }}>Portfolio</Link>
                            <Link href="#contact" color='inherit' sx={{ textDecoration: 'none' }}>Contact Us</Link>

                        </Box>
                    </Grid>

                    {/* Company */}
                    <Grid size={{ md: 2, xs: 6, sm: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}
                        >
                            Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                            <Link href="/privacyPolicy" color='inherit' sx={{ textDecoration: 'none' }}>Privacy Policy</Link>
                            <Link href="/TermsConditions" color='inherit' sx={{ textDecoration: 'none' }}>Terms of Use</Link>
                        </Box>
                    </Grid>

                    {/* Social */}
                    <Grid size={{ md: 2, xs: 6, sm: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}
                        >
                            Social
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                            <Link
                                href="https://www.linkedin.com/company/webbizual"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                                sx={{ textDecoration: 'none' }}
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://dribbble.com/webbizual"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                                sx={{ textDecoration: 'none' }}
                            >
                                Dribbble
                            </Link>
                            <Link
                                href="https://www.instagram.com/webbizual"
                                target="_blank"
                                rel="noopener"
                                color="inherit"
                                sx={{ textDecoration: 'none' }}
                            >
                                Instagram
                            </Link>
                        </Box>

                    </Grid>
                </Grid>

                <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.4)' }} />

                <Typography
                    variant="body2"
                    align="center"
                    sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        fontFamily: 'Plus Jakarta Sans',
                        lineHeight: 1.5,
                        color: '#fff'
                    }}
                >
                    © 2025 Webbizual Tech. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default FooterSection;
