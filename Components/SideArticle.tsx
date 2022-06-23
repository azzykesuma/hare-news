import {Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'
import { arrayProps } from '../pages/index';

const SideArticle = ({news}: arrayProps) => {

    return (
        <Box sx={{padding : '10px', width : '300px'}}>
            <Typography variant='h5' component='h2'>Popular Article</Typography>
            {news.map((item:any) => {
                return (
                    <Box sx={{padding : '5px', marginBottom : '10px'}} component='div' key={item.fields.id}
                    >
                        <Link href={`/news/${item.fields.id}`}>
                            <a>
                                <Image 
                                src={`https:${item.fields.newsImage.fields.file.url}`}
                                alt={item.fields.newsTitle}
                                width={150} height={80}
                                />
                            </a>
                        </Link>
                        <Link href={`/news/${item.fields.id}`}>
                            <a>
                                <Typography variant='body1'component='h3'
                                sx={{
                                    fontSize : '12px',
                                    fontFamily : 'Roboto serif',
                                }}
                                >
                                    {item.fields.newsTitle}
                                </Typography>
                            </a>
                        </Link>
                        <Typography variant='body2'component='h3'
                        sx={{
                            fontSize : '10px',
                            fontFamily : 'Roboto serif',
                        }}
                        >
                            {item.fields.publishedTime}
                        </Typography>
                    </Box>
                )
            })
        }
        </Box>
    )
}

export default SideArticle;