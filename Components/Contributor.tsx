import { Container, Typography, Grid,
    Box
} from '@mui/material'

const Contributor = ({news} : any) => {
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })
    return (
       <Container>
            <Typography variant='h4' component='h2'
            sx={{fontFamily : 'Roboto serif', fontWeight : '500',
            textAlign : 'center', marginBottom : '20px', marginTop : '2em'}}
            >
                Contributor section
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[0].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height : '150px',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'end',
                    }}>
                        <Box
                            sx={{
                                backgroundColor : 'rgba(0,0,0,0.5)',
                                padding: '10px',
                            }}
                            ><Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.8em'}}
                            >{filterImage[0].title}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{filterImage[0].source_id}</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[1].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height : '150px',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'end',
                    }}>
                        <Box
                            sx={{
                                backgroundColor : 'rgba(0,0,0,0.5)',
                                padding: '10px',
                            }}
                            ><Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.8em'}}
                            >{filterImage[1].title}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{filterImage[1].source_id}</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[2].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height : '150px',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'end',
                    }}>
                        <Box
                            sx={{
                                backgroundColor : 'rgba(0,0,0,0.5)',
                                padding: '10px',
                            }}
                            ><Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.8em'}}
                            >{filterImage[2].title}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{filterImage[2].source_id}</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[1].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height : '150px',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        alignItems: 'end',
                    }}>
                        <Box
                            sx={{
                                backgroundColor : 'rgba(0,0,0,0.5)',
                                padding: '10px',
                            }}
                            ><Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.8em'}}
                            >{filterImage[2].title}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{filterImage[2].source_id}</Typography>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
       </Container>
    )
}

export default Contributor;