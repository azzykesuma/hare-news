import { Box, Divider } from "@mui/material";
import Image from 'next/image';
import { GetServerSideProps } from "next";

export const getServerSideProps : GetServerSideProps = async () => {
    const apikey = process.env.API_KEY;
    const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_8265eed20697d4f814decdd2838578db10c6&language=en`);
    const news = await res.json();

    return {
        props : {news}
    }
}

const Business = ({news} : any) => {
    console.log(news);
    return (
        <Box
        sx={{
            padding : '20px',
            maxWidth : '900px',
        }}
        >
            <Divider textAlign='left'>Business</Divider>

            {news.map((item : any) => {
                return (
                    <Box
                    sx={{display:'flex'}}
                    >
                        {/* <Image src={item.image_url} height={150} width={200} /> */}
                    </Box>
                )
            })}
        </Box>
    )
}

export default Business;