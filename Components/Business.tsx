import { Box, Divider } from "@mui/material";
import Image from 'next/image';



const Business = ({news} : any) => {
    let topCategory: any = []
    let businessCategory: any = []
    let politicCategory: any = []
    let healthCategory: any = []
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })

    // filtering category
    // wtf is this ??????????????
    for(let i = 0; i < filterImage.length; i++) {
       if(filterImage[i].category[0] === 'top') {
        topCategory.push(filterImage[i])
       }

       if(filterImage[i].category[0] === 'business') {
        businessCategory.push(filterImage[i])
       }

       if(filterImage[i].category[0] === 'politic') {
        politicCategory.push(filterImage[i])
       }

       if(filterImage[i].category[0] === 'health') {
        healthCategory.push(filterImage[i])
       }
       
    }

    
    return (
        <Box
        sx={{
            padding : '20px',
            maxWidth : '900px',
        }}
        >
            <Divider textAlign='left'>Business</Divider>
            { filterImage.map((item : any) => {
                return (
                    <Box>
                        <Image src={item.image_url} alt={item.title} width={300} height={200} />
                    </Box>
                )
            })}
        </Box>
    )
}

export default Business;