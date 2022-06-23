import { Container,Box,Divider } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from '@mui/material'
// components
import HeroNews from '../Components/HeroNews'
import SideArticle from '../Components/SideArticle'
import Videos from '../Components/Videos'
import Contributor from '../Components/Contributor'
import NewsCategory from '../Components/NewsCategory';
import { createClient } from 'contentful';


export const getStaticProps: GetStaticProps = async () => {

  const client = createClient({
    space : 'p18acd3wl84h',
    accessToken : 'iocD6zMzTZbEytD0Hu7alzU3Z7IJ-nHzyr2lhbmHwz0'
  })

  const res = await client.getEntries({ content_type : 'id'});

  return {
    props : {
      news : res.items,
      revalidate : 1
    }
  }
}

export interface Props {
  news : {
    fields : {
      author : string
      category : string
      id : number
    }
    newsDescription : {
      content : object[]
    }
    newsImage : {
      fields : {
        file : {
          url : string
        }
      }
    }
    newsTitle : string
    publishedTime : number
  }
}

export interface arrayProps {
  news : Props[]
}


const Home: NextPage<arrayProps> = ({news}) => {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Container disableGutters maxWidth='lg'>
      <Head>
        <title>Hare news || Home Page</title>
        <meta name="description" content="Hare News" />
      </Head>
      {/* hero component */}
      <Box sx={{
        display: 'flex',
        height : '450px'
      }}>
        <HeroNews news={news} />
        {matches ? <SideArticle news={news} /> : null}
      </Box>
      <Videos news={news} />
      <Contributor news={news}/>
     <NewsCategory news={news} />
    </Container>
  )
}

export default Home
