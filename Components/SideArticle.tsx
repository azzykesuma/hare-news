import {Typography, Box } from '@mui/material';
import Image from 'next/image';

const SideArticle = ({news}:any) => {
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })
    console.log(filterImage);
    return (
        <Box sx={{padding : '10px', width : '300px'}}>
            <Typography variant='h5' component='h2'>Popular Article</Typography>
            {filterImage.map((item:any) => {
                return (
                    <Box sx={{padding : '5px', marginBottom : '10px'}} component='div' key={item.alt}
                    >
                        <Image src={item.image_url} alt={item.title}
                        width={150} height={80} />
                        <Typography variant='body1'component='h3'
                        sx={{
                            fontSize : '12px',
                            fontFamily : 'Roboto serif',
                        }}
                        >
                            {item.title}
                        </Typography>
                        <Typography variant='body2'component='h3'
                        sx={{
                            fontSize : '10px',
                            fontFamily : 'Roboto serif',
                        }}
                        >
                            {item.pubDate}
                        </Typography>
                    </Box>
                )
            })
        }
        </Box>
    )
}

export default SideArticle;