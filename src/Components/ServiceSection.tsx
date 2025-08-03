import { Box, Typography, Grid, Card, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const services = [
    {
        title: 'UI/UX Design',
        description: ['Website Design', 'Responsive Design', 'Mobile App Design'],
        image: '/images/uiux.webp',
        detailed: true,
    },
    {
        title: 'Website Development',
        description: [
            'Static Website',
            'Responsive Design',
            'WordPress Development',
            'Shopify Development',
        ],
        image: '/images/webdev.webp',
        detailed: true,
    },
    {
        title: 'Graphic Designing',
        description: ['Poster Design', 'Product Image Design', 'Photoshop Retouch'],
        image: '/images/graphic.webp',
        detailed: true,
    },
    {
        title: 'Ecommerce Catalogue',
        description: ['Product Listing', 'Product Optimization'],
        image: '/images/ecommerce.webp',
        detailed: true,
    },
];

const ServiceCard = styled(Card)(() => ({
    position: 'relative',
    overflow: 'hidden',
    height: 320,
    borderRadius: 16,
    backgroundColor: '#000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 24,
    color: '#fff',
}));

const ServiceSection = () => {
    return (
        <Box sx={{ py: 10, px: { xs: 2, md: 8 }, bgcolor: '#f9f9f9' }}>
            <Grid container spacing={6} alignItems="center" sx={{ mb: 6 }}>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Typography
                        variant="subtitle2"
                        sx={{ color: '#1976d2', fontWeight: 600, textTransform: 'uppercase', mb: 1 }}
                    >
                        What we're offering
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Everything You Need to <br /> Grow Online
                    </Typography>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Typography sx={{ color: '#555', maxWidth: 480 }}>
                        We bring your digital vision to life through creative design and smart development. Our team delivers
                        user-first websites, stunning graphics, and custom eCommerce solutions that help your business grow
                        online. Whether you're starting from scratch or scaling up, we’ve got the tools to make it happen.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid size={{ md: 3, xs: 12 }} key={index}>
                        <ServiceCard sx={{ backgroundImage: `url(${service.image})` }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                {service.title}
                            </Typography>
                            <List dense sx={{ color: '#fff', pl: 1 }}>
                                {service.description.map((sub, i) => (
                                    <ListItem key={i} disableGutters sx={{ py: 0.5, fontSize: 18 }}>
                                        <ListItemText primaryTypographyProps={{ fontSize: 16 }} primary={`• ${sub}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </ServiceCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceSection;
