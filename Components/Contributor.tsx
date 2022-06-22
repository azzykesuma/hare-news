import { Container, Typography, Grid,
    Box
} from '@mui/material'

const Contributor = ({news} : any) => {

    return (
       <Box
       sx={{
        maxWidth : '900px',
        padding : '20px'
       }}
       >
            <Typography variant='h4' component='h2'
            sx={{fontFamily : 'Roboto serif', fontWeight : '500',
            textAlign : 'center', marginBottom : '20px', marginTop : '1em'}}
            >
                Contributor section
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${news[1].fields.newsImage.fields.file.url})`,
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
                            >{news[0].fields.newsTitle}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{news[0].fields.author}</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${news[1].fields.newsImage.fields.file.url})`,
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
                            >{news[1].fields.newsTitle}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{news[1].fields.author}</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage : `url(${news[2].fields.newsImage.fields.file.url})`,
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
                            >{news[2].fields.newsTitle}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{news[2].fields.author}</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Box sx={{
                        backgroundImage :`url(${news[1].fields.newsImage.fields.file.url})`,
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
                            >{news[2].fields.newsTitle}</Typography>
                            <Typography color='white'
                            sx={{fontFamily : 'Roboto serif', fontSize : '0.6em'}}
                            >{news[2].fields.author}</Typography>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
       </Box>
    )
}

export default Contributor;