import { Grid,Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';


const HeroNews = ({news}: any) => {
    const matches = useMediaQuery('(min-width:600px)');
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })
    console.log(filterImage[0].image_url);



    return (
    <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box sx={{
                    backgroundImage : `url(${filterImage[0].image_url})`,
                    height: '200px',
                    backgroundSize: 'cover',
                }}></Box>
            </Grid>
        </Grid>
        <Box className={matches ? 'tabletView' : 'mobileView'}
        sx={{gap : '20px'}}
        >
            <Grid container spacing={3}>
                <Grid item xs={6} sm={12}>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[1].image_url})`,
                        height: '200px',
                        backgroundSize: 'cover',
                        }}></Box>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <Box sx={{
                        backgroundImage : `url(${filterImage[2].image_url})`,
                        height: '200px',
                        backgroundSize: 'cover',
                    }}></Box>
                </Grid>
            </Grid>
        </Box>
    </>
    )
}

export default HeroNews