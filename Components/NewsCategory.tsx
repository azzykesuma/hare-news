import { Box, Divider, Typography } from "@mui/material";
import Image from 'next/image';
import { useMediaQuery } from "@mui/material";


const NewsCategory = ({news} : any) => {
    const matches = useMediaQuery("(min-width:600px)");
    let topCategory: any = []
    let businessCategory: any = []
    let politicCategory: any = []
    let healthCategory: any = []
    const filterImage = news.filter(function(image: any) {
        return image.image_url !== null
    })
    console.log(filterImage);

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
            { businessCategory.map((item : any) => {
                return (
                    <Box key={item.title}
                    sx={{marginTop : '20px',
                    display : 'flex',
                    alignItems : 'center',
                }}
                    >
                        <Image src={item.image_url}
                        alt={item.title}
                        width={matches ? '250px' : '200px'}
                        height={matches ? '200px' : '100px'} />

                        <Box component='div'
                        sx={{
                            padding : '10px',
                            width : '500px', 
                        }}
                        >
                            <Typography variant='body2' component='h6'
                            sx={{fontFamily : 'Roboto serif'}}
                            className='newsText'
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </Box>
                )
            })}
            <Divider textAlign='left'>Top</Divider>
            { topCategory.map((item : any) => {
                return (
                    <Box key={item.title}
                    sx={{marginTop : '20px',
                    display : 'flex',
                    alignItems : 'center',
                    }}
                    >
                        <Image src={item.image_url}
                        alt={item.title}
                        width={matches ? '250px' : '200px'}
                        height={matches ? '200px' : '100px'}
                        className='newsImage'
                        />
                        <Box component='div'
                        sx={{
                            padding : '10px',
                            width : '500px', 
                        }}
                        >
                            <Typography variant='body2' component='h6'
                            sx={{fontFamily : 'Roboto serif'}}
                            className='newsText'
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </Box>
                )
            })}
            <Divider textAlign='left'>Politics</Divider>
            { politicCategory.map((item : any) => {
                return (
                    <Box key={item.title}
                    sx={{marginTop : '20px',
                    display : 'flex',
                    alignItems : 'center',
                    boxSizing : 'border-box',
                }}
                    >
                        <Image src={item.image_url}
                        alt={item.title}
                        width={matches ? '250px' : '200px'}
                        height={matches ? '200px' : '100px'} />

                        <Box component='div'
                        sx={{
                            padding : '10px',
                        }}
                        >
                            <Typography variant='body2' component='h6'
                            sx={{fontFamily : 'Roboto serif'}}
                            className='newsText'
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}

export default NewsCategory;