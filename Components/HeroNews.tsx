import { Grid,Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';


const HeroNews = ({news}: any) => {
    const matches = useMediaQuery('(min-width:600px)');
    console.log(news);
    return (
    <>
        {news.map((item:any) => (
            <>
                <p>{item.title}</p>
                {item.image_url ? (
                    <Image height={300} width={300} src={item.image_url} />
                ) : null}
            </>
            
        ))}
        <Box className={matches ? 'tabletView' : 'mobileView'}
        sx={{gap : '20px'}}
        >
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box sx={{backgroundColor : 'red', height : '100%'}}>item 1</Box>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={6} sm={12}>
                <Box  sx={{backgroundColor : 'yellow'}}>item 2</Box>
            </Grid>
            <Grid item xs={6} sm={12}>
                <Box  sx={{backgroundColor : 'blue'}}>item 3</Box>
            </Grid>
        </Grid>
        </Box>
    </>
    )
}

export default HeroNews