import { Box, Typography, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function TopNavBar() {
    return (
        <Box className='TopNavBar' sx={{
            py: 1.5, background: 'rgb(31, 65, 174)', px: 5, display: { md: 'block', xs: 'none' }
        }}>
            <Container maxWidth='xl'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <EmailIcon sx={{ color: '#fff', fontSize: '28px' }} />
                            <Box>
                                <Typography sx={{
                                    fontFamily: 'Plus Jakarta Sans', fontWeight: 500,
                                    fontSize: '16px', color: '#fff'
                                }}>
                                    info@webbizualtech.in
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <LocalPhoneIcon sx={{ color: '#fff', fontSize: '28px' }} />
                            <Box>
                                <Typography sx={{
                                    fontFamily: 'Plus Jakarta Sans',
                                    fontWeight: 500, fontSize: '16px', color: '#fff'
                                }}>
                                    +91 9994634218
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                        <FacebookRoundedIcon sx={{ color: '#fff', fontSize: '28px' }} />
                        <LinkedInIcon sx={{ color: '#fff', fontSize: '28px' }} />
                        <InstagramIcon sx={{ color: '#fff', fontSize: '28px' }} />
                    </Box>
                </Box>
            </Container >
        </Box >
    )
}
export default TopNavBar;