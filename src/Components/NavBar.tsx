import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/WebbizualLogo.png';

const pages = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Service', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: isScrolled ? 'rgb(31, 65, 174)' : '#ffffff',
                transition: 'background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out',
                boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                mt: isScrolled ? 0 : { md: 6.5, xs: 0 },
                py: isScrolled ? 0 : 0.5,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Box sx={{ flexShrink: 0 }}>
                        <a href="#home">
                            <img
                                src={Logo}
                                alt="Webbizual Tech Logo"
                                style={{
                                    height: isScrolled ? 60 : 80,
                                    transition: 'all 0.3s ease-in-out',
                                    background: 'transparent',
                                }}
                            />
                        </a>
                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            sx={{ color: isScrolled ? '#fff' : 'rgb(31, 65, 174)' }}
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map(({ label, id }) => (
                                <MenuItem
                                    key={label}
                                    component="a"
                                    href={`#${id}`}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: isScrolled ? '#fff' : 'rgb(31, 65, 174)',
                                        fontWeight: 500,
                                    }}
                                >
                                    <Typography textAlign="center" sx={{ width: '100%' }}>
                                        {label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop nav */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        {pages.map(({ label, id }) => (
                            <Button
                                key={label}
                                href={`#${id}`}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: isScrolled ? '#fff' : 'rgb(31, 65, 174)',
                                    fontSize: '17px',
                                    fontFamily: 'Plus Jakarta Sans',
                                    fontWeight: 500,
                                    textTransform: 'capitalize',
                                    borderBottom: '1px solid transparent',
                                    borderRadius: 0,
                                    transition: 'border-color 0.3s ease-in-out, color 0.3s',
                                    '&:hover': {
                                        borderBottom: `2px solid ${isScrolled ? '#fff' : 'rgb(31, 65, 174)'}`,
                                    },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
