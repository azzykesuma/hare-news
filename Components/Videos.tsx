import { Box, Container, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {useMediaQuery} from '@mui/material';

const Videos = ({news} : any) => {
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Box
        sx={{
            maxWidth : '900px',
            padding : '20px'
        }}
        >
            <Typography variant='h4' component='h2'
            sx={{fontFamily : 'Roboto serif', fontWeight : '500',
            textAlign : 'center', marginBottom : '20px'}}
            >
                Videos of the day
            </Typography>
            <Splide aria-label="My Favorite Images"
            options={{
                perPage: matches ? 3 : 1,
                gap : '1rem',
                rewind : true
            }}
            >
                <SplideSlide>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[0].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '150px',
                        width : '100%',
                        maxWidth: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <PlayCircleFilledWhiteIcon fontSize='large' sx={{color : 'red'}} />
                    </Box>
                </SplideSlide>
                <SplideSlide>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[1].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '150px',
                        maxWidth: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <PlayCircleFilledWhiteIcon fontSize='large' sx={{color : 'red'}} />
                    </Box>
                </SplideSlide>
                <SplideSlide>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[2].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '150px',
                        maxWidth: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <PlayCircleFilledWhiteIcon fontSize='large' sx={{color : 'red'}} />
                    </Box>
                </SplideSlide>
                <SplideSlide>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[0].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '150px',
                        maxWidth: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <PlayCircleFilledWhiteIcon fontSize='large' sx={{color : 'red'}} />
                    </Box>
                </SplideSlide>
                <SplideSlide>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[1].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '150px',
                        maxWidth: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <PlayCircleFilledWhiteIcon fontSize='large' sx={{color : 'red'}} />
                    </Box>
                </SplideSlide>
                <SplideSlide>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[2].image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '150px',
                        maxWidth: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <PlayCircleFilledWhiteIcon fontSize='large' sx={{color : 'red'}} />
                    </Box>
                </SplideSlide>
            </Splide>
        </Box>
    )
}

export default Videos;