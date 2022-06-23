import React from 'react'
import { createClient } from 'contentful'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Props } from '../index'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect } from 'react'



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

    if(!items.length) {
        return {
            redirect : {
                destination : '/',
                permanent : false
            }
        }
    }

    return {
        props : { news : items[0]},
        revalidate : 1
    }
}


const newsPage: NextPage<Props> = ({ news }) => {
    const text: any = news.fields.newsDescription
  return (
    <Container maxWidth='lg'>
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
        sx={{fontFamily : 'Roboto serif'}}
        >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque nisl, placerat in libero sit amet, congue finibus mauris. Sed congue pellentesque dui, nec iaculis erat egestas in. In pretium ex leo. Phasellus in justo justo. Ut at purus vel nisl auctor pellentesque id quis erat. Quisque in quam nec velit ultrices finibus dignissim non nisl. Sed id dapibus augue. Nam eu mauris a mauris euismod porta in id lorem. Curabitur et pellentesque risus, ac mollis sem. In sodales, enim eu mollis dignissim, metus risus venenatis mi, a aliquam massa tellus maximus neque. Sed volutpat rhoncus posuere. Phasellus pulvinar at risus nec hendrerit. Fusce maximus rhoncus leo sed rutrum.
            <br /> <br />
            Maecenas ac massa hendrerit, pretium quam quis, dapibus risus. Nullam venenatis suscipit justo, ut finibus libero cursus bibendum. Morbi finibus tincidunt mauris, sit amet dictum purus auctor eget. Curabitur dignissim lacus vulputate dolor tincidunt, tristique maximus nisi suscipit. Mauris placerat augue libero, vel sollicitudin est tincidunt eget. Cras eget ullamcorper arcu, quis vestibulum tortor. Duis vel sapien ut ante vehicula vestibulum ut sit amet dui. Nunc sed sagittis felis. Quisque a scelerisque urna, id hendrerit ante. Sed sagittis ut nisl in lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum quam a justo ornare, non consequat augue pulvinar.
            Maecenas ac massa hendrerit, pretium quam quis, dapibus risus. Nullam venenatis suscipit justo, ut finibus libero cursus bibendum. Morbi finibus tincidunt mauris, sit amet dictum purus auctor eget. Curabitur dignissim lacus vulputate dolor tincidunt, tristique maximus nisi suscipit. Mauris placerat augue libero, vel sollicitudin est tincidunt eget. Cras eget ullamcorper arcu, quis vestibulum tortor. Duis vel sapien ut ante vehicula vestibulum ut sit amet dui. Nunc sed sagittis felis. 
            <br /><br />
            Quisque a scelerisque urna, id hendrerit ante. Sed sagittis ut nisl in lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum quam a justo ornare, non consequat augue pulvinar.
            Maecenas ac massa hendrerit, pretium quam quis, dapibus risus. Nullam venenatis suscipit justo, ut finibus libero cursus bibendum. Morbi finibus tincidunt mauris, sit amet dictum purus auctor eget. Curabitur dignissim lacus vulputate dolor tincidunt, tristique maximus nisi suscipit. Mauris placerat augue libero, vel sollicitudin est tincidunt eget. Cras eget ullamcorper arcu, quis vestibulum tortor. Duis vel sapien ut ante vehicula vestibulum ut sit amet dui. Nunc sed sagittis felis. Quisque a scelerisque urna, id hendrerit ante. Sed sagittis ut nisl in lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum quam a justo ornare, non consequat augue pulvinar.
        </Typography>
    </Container>
  )
}

export default newsPage