import type { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import {
    Typography
} from '@mui/material'

export const getStaticPaths : GetStaticPaths = async () => {
    const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_8265eed20697d4f814decdd2838578db10c6&country=id`);
    const data = await res.json();

    const paths = data.results.map((news : any) => {
        return {
            params : { slug : encodeURIComponent(news.title)}
        }
    })

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps : GetStaticProps = async (context) => {
    const slug = context?.params?.slug;
    const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_8265eed20697d4f814decdd2838578db10c6&country=id&q=${slug}`);
    const data = await res.json();

    if(!data.length) {
        return {
            redirect : {
                destination : '/',
                permanent : false
            }
        }
    }

    return {
        props : { news : data.results[0]}
    }
}


const newsPage : NextPage = ({ news }: any) => {
    console.log(news);
    return (
        <>
            <Typography>this is news page</Typography>
            <Typography>{news.title}</Typography>
        </>
    )
}

export default newsPage;