import React from 'react'
import { createClient } from 'contentful'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Box, Container, Typography,Divider,Grid } from '@mui/material'
import Image from 'next/image'
import { useMediaQuery } from '@mui/material'
import SideArticle from '../../Components/SideArticle'
import BottomNews from '../../Components/BottomNews'
import Head from 'next/head'

const client = createClient({
    space : 'p18acd3wl84h',
    accessToken : 'iocD6zMzTZbEytD0Hu7alzU3Z7IJ-nHzyr2lhbmHwz0'
})

export const getStaticPaths : GetStaticPaths = async() => {

    const res = await client.getEntries({ content_type : 'id'});

    const paths = res.items.map((item : any) => ({
        params : { id : item.fields.id.toString()}
    }))

    return {
        paths,
        fallback : false
    }
    
}

export const getStaticProps : GetStaticProps = async({params}) => {
    const { items } = await client.getEntries({
        content_type : 'id',
        'fields.id' : params?.id
    })

    const res = await client.getEntries({ content_type : 'id'});

    if(!items.length) {
        return {
            redirect : {
                destination : '/',
                permanent : false
            }
        }
    }

    return {
        props : { 
            news : items[0],
            allNews : res.items
        },
        revalidate : 1
    }
}



const NewsPage = ({news,allNews} : any) => {

    const matches = useMediaQuery('(min-width:1200px)');

    return (
        <>
            <Head>
                <title>{news.fields.newsTitle}</title>
            </Head>
            <Container maxWidth='lg'>
                <Box
                sx={{
                    display : 'flex',
                    flexDirection : 'row-reverse',
                    justifyContent : 'flex-end',
                    height : 'fit-content',
                    position : 'relative',
                }}
                >
                    {matches ? (
                        <Box
                        sx={{ 
                            position : 'absolute',
                            right : 0
                        }}
                        >
                            <SideArticle news={allNews} />
                        </Box>
                    ) : null}
                <Box
                sx={{
                    width : matches ? '70%' : '100%',
                    alignSelf : 'flex-start'
                }}
                >
                    <Box
                    sx={{
                        padding : '20px'
                    }}
                    >
                        <Image
                        src={'https:' + news.fields.newsImage.fields.file.url}
                        layout='responsive'
                        width='150px'
                        height='70px'
                        className='imagePage'
                        alt={news.fields.title}
                        />
                    </Box>
                    <Typography variant='h6' component='h1'
                    sx={{ fontFamily : 'Roboto serif' }}
                    >
                        {news.fields.newsTitle}
                    </Typography>
                    <Typography variant='body1' component='h2'
                    sx={{ fontFamily : 'Roboto serif' }}
                    >
                        {news.fields.author}
                    </Typography>
                    <Typography variant='body2' component='p'
                    sx={{fontFamily : 'Roboto serif', marginTop : '20px'}}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque nisl, placerat in libero sit amet, congue finibus mauris. Sed congue pellentesque dui, nec iaculis erat egestas in. In pretium ex leo. Phasellus in justo justo. Ut at purus vel nisl auctor pellentesque id quis erat. Quisque in quam nec velit ultrices finibus dignissim non nisl. Sed id dapibus augue. Nam eu mauris a mauris euismod porta in id lorem. Curabitur et pellentesque risus, ac mollis sem. In sodales, enim eu mollis dignissim, metus risus venenatis mi, a aliquam massa tellus maximus neque. Sed volutpat rhoncus posuere. Phasellus pulvinar at risus nec hendrerit. Fusce maximus rhoncus leo sed rutrum.
                        <br /> <br />
                        Maecenas ac massa hendrerit, pretium quam quis, dapibus risus. Nullam venenatis suscipit justo, ut finibus libero cursus bibendum. Morbi finibus tincidunt mauris, sit amet dictum purus auctor eget. Curabitur dignissim lacus vulputate dolor tincidunt, tristique maximus nisi suscipit. Mauris placerat augue libero, vel sollicitudin est tincidunt eget. Cras eget ullamcorper arcu, quis vestibulum tortor. Duis vel sapien ut ante vehicula vestibulum ut sit amet dui. Nunc sed sagittis felis. Quisque a scelerisque urna, id hendrerit ante. Sed sagittis ut nisl in lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum quam a justo ornare, non consequat augue pulvinar.
                        Maecenas ac massa hendrerit, pretium quam quis, dapibus risus. Nullam venenatis suscipit justo, ut finibus libero cursus bibendum. Morbi finibus tincidunt mauris, sit amet dictum purus auctor eget. Curabitur dignissim lacus vulputate dolor tincidunt, tristique maximus nisi suscipit. Mauris placerat augue libero, vel sollicitudin est tincidunt eget. Cras eget ullamcorper arcu, quis vestibulum tortor. Duis vel sapien ut ante vehicula vestibulum ut sit amet dui. Nunc sed sagittis felis. 
                        <br /><br />
                        Quisque a scelerisque urna, id hendrerit ante. Sed sagittis ut nisl in lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum quam a justo ornare, non consequat augue pulvinar.
                        Maecenas ac massa hendrerit, pretium quam quis, dapibus risus. Nullam venenatis suscipit justo, ut finibus libero cursus bibendum. Morbi finibus tincidunt mauris, sit amet dictum purus auctor eget. Curabitur dignissim lacus vulputate dolor tincidunt, tristique maximus nisi suscipit. Mauris placerat augue libero, vel sollicitudin est tincidunt eget. Cras eget ullamcorper arcu, quis vestibulum tortor. Duis vel sapien ut ante vehicula vestibulum ut sit amet dui. Nunc sed sagittis felis. Quisque a scelerisque urna, id hendrerit ante. Sed sagittis ut nisl in lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum quam a justo ornare, non consequat augue pulvinar.
                    </Typography>
                    </Box>
                </Box>
                <Divider textAlign='center' sx={{marginBlock : '10px', maxWidth : '70%'}}>More news</Divider>
                <Grid container spacing={2} sx={{maxWidth : '70%'}}>
                    <BottomNews news={allNews}/>
                </Grid>
            </Container>
        </>
    )
}

export default NewsPage