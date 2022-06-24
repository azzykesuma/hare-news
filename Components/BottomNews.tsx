import React from 'react'
import { useMediaQuery,Grid,Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'

const BottomNews = ({news} : any) => {
    const matchesTablet = useMediaQuery('(min-width:600px)');
    const matchesDesktop = useMediaQuery('(min-width:1200px)');

    console.log(news);
    return (
        <>
            {news.map((item:any) => (
                    <Grid item xs={6} lg={4} key={item.fields.id}>
                        <Link href={`/news/${item.fields.id}`}>
                            <a>
                                <Box sx={{
                                    maxWidth : '200px',
                                    display : 'block'
                                    }}>
                                    <Image src={'https:' + item.fields.newsImage.fields.file.url}
                                    height = {200}
                                    width = {200}
                                    layout = 'responsive'
                                    alt={item.fields.newsTitle}
                                    />
                                    <Typography variant='h6' component='h4'
                                    sx={{fontFamily : 'Roboto serif', fontWeight : '400',
                                    fontSize : matchesTablet ? '16px' : '12px'
                                    }}
                                >
                                        {item.fields.newsTitle}
                                    </Typography>
                                </Box>
                            </a>
                        </Link>
                    </Grid>
            ))}
        </>
    )
}

export default BottomNews