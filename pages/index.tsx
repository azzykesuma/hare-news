import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
// components
import HeroNews from '../Components/HeroNews'
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const apikey = process.env.API_KEY;
  const res = await fetch(`https://newsdata.io/api/1/news?apikey=${apikey}&country=id`);
  const news = await res.json();


  return {
      props : { news }
  }
}

const Home: NextPage = ({news}: any) => {
  
  return (
    <Container maxWidth='lg'>
      <Head>
        <title>Hare news || Home Page</title>
        <meta name="description" content="Hare News" />
      </Head>
      {/* hero component */}
      <HeroNews news={news.results} />
    </Container>
  )
}

export default Home
