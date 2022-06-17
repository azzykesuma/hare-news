import { Container,Box,Divider } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useMediaQuery } from '@mui/material'
import { GetServerSideProps } from 'next';
// components
import HeroNews from '../Components/HeroNews'
import SideArticle from '../Components/SideArticle'
import Videos from '../Components/Videos'
import Contributor from '../Components/Contributor'
import Business from '../Components/Business';

export const getServerSideProps: GetServerSideProps = async () => {
  const apikey = process.env.API_KEY;
  const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_8265eed20697d4f814decdd2838578db10c6&country=id`);
  const news = await res.json();
  

  return {
      props : { news }
  }
}


const Home: NextPage = ({news}: any) => {
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
        <HeroNews news={news.results} />
        {matches ? <SideArticle news={news.results} /> : null}
      </Box>
      <Videos news={news.results} />
      <Contributor news={news.results}/>
      {/* news sections */}
      <Business news={news.results} />
    </Container>
  )
}

export default Home
