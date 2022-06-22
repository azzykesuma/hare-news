import { Grid,Box, Typography,Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link'


const HeroNews = ({news}: any) => {
    const matches = useMediaQuery('(min-width:600px)');
    const matchesDesktop = useMediaQuery('(min-width:1200px)');
    // converting title to slug
    console.log(news[0].fields.newsTitle)

    return (
    <>
        <Container sx={{marginBlock : '10px 20px'}}>
            <Box className={matches ? 'tabletWrapper' : 'mobileWrapper'}>
                <Grid container className={matchesDesktop ? 'desktopLayout' : ''}>
                    <Grid item xs={12} sx={{width : '80%'}}>
                        <Link href={''}>
                            <a>
                                <Box
                                className={matches ? 'hero_img_tablet' : 'hero_img_mobile'}
                                sx={{
                                    backgroundImage : `url(${news[0].fields.newsImage.fields.file.url})`,
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
                                    >{news[0].fields.newsTitle}</Typography></Box>
                                </Box>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={3}
                className={matches ? 'tabletView' : 'mobileView'}>
                    <Grid item xs={6} sm={12} lg={12}>
                        <Link href=''>
                            <a>
                                <Box 
                                className={matches ? 'tabletImg' : 'mobileImg'}
                                sx={{
                                    backgroundImage : `url(${news[1].fields.newsImage.fields.file.url})`,
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
                                            >{news[1].fields.newsTitle}</Typography>
                                        </Box>
                                </Box>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={12} lg={12}>
                        <Link href='/'>
                            <a>
                                <Box 
                                className={matches ? 'tabletImg' : 'mobileImg'}
                                sx={{
                                    backgroundImage : `url(${news[2].fields.newsImage.fields.file.url})`,
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
                                            >{news[2].fields.newsTitle}</Typography>
                                        </Box>
                                </Box>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>
    )
}

export default HeroNews