import { Grid,Box, Typography,Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';


const HeroNews = ({news}: any) => {
    const matches = useMediaQuery('(min-width:600px)');
    const matchesDesktop = useMediaQuery('(min-width:1200px)');
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })
    console.log(filterImage[0].image_url);



    return (
    <>
        <Container sx={{marginBlock : '10px 20px'}}>
            <Box className={matches ? 'tabletWrapper' : 'mobileWrapper'}>
                <Grid container className={matchesDesktop ? 'desktopLayout' : ''}>
                    <Grid item xs={12} sx={{width : '80%'}}>
                        <Box
                        className={matches ? 'hero_img_tablet' : 'hero_img_mobile'}
                        sx={{
                            backgroundImage : `url(${filterImage[0].image_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'end',
                            backgroundRepeat: 'no-repeat',
                            marginBottom : '10px'
                        }}>
                            <Box
                            sx={{
                                backgroundColor : 'rgba(0,0,0,0.5)',
                                padding: '10px',
                            }}
                            ><Typography color='white'
                            sx={{fontFamily : 'Roboto serif'}}
                            >{filterImage[0].title}</Typography></Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3}
                className={matches ? 'tabletView' : 'mobileView'}>
                    <Grid item xs={6} sm={12} lg={12}>
                        <Box 
                        className={matches ? 'tabletImg' : 'mobileImg'}
                        sx={{
                            backgroundImage : `url(${filterImage[1].image_url})`,
                            height: '200px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'end',
                            backgroundRepeat: 'no-repeat',
                            }}>
                                <Box
                                sx={{
                                    backgroundColor : 'rgba(0,0,0,0.5)',
                                    padding: '10px',
                                }}
                                    ><Typography color='white'
                                    sx={{fontFamily : 'Roboto serif',fontSize : '0.8em'}}
                                    >{filterImage[1].title}</Typography>
                                </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={12} lg={12}>
                        <Box 
                        className={matches ? 'tabletImg' : 'mobileImg'}
                        sx={{
                            backgroundImage : `url(${filterImage[2].image_url})`,
                            height: '200px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'end',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <Box
                                sx={{
                                    backgroundColor : 'rgba(0,0,0,0.5)',
                                    padding: '10px',
                                }}
                                    ><Typography color='white'
                                    sx={{fontFamily : 'Roboto serif',fontSize : '0.8em'}}
                                    >{filterImage[2].title}</Typography>
                                </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>
    )
}

export default HeroNews