import React from 'react'
import { useMediaQuery,Grid,Box, Typography } from '@mui/material';
import Image from 'next/image';

const BottomNews = ({news} : any) => {
    const matches = useMediaQuery('(min-width:600px)');
    console.log(news);
    return (
        <>
            {news.map((item:any) => (
                <Grid container sx={{ marginTop : '30px', width : '70%'}}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Image src={'https:' + item.fields.newsImage.fields.file.url}
                            height='200px'
                            width='200px'
                            />
                            <Typography variant='h6' component='h4'
                            sx={{fontFamily : 'Roboto serif', fontWeight : '400',
                            width : '200px'
                        }}
                            >
                                {item.fields.newsTitle}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}

export default BottomNews