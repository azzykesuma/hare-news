import { Box, Divider, Typography } from "@mui/material";
import Image from 'next/image';
import { useMediaQuery } from "@mui/material";
import Link from 'next/link'

const NewsCategory = ({news} : any) => {
    const matches = useMediaQuery("(min-width:600px)");
    let topCategory: string[] = []
    let businessCategory: any = []
    let politicCategory: any = []
    let healthCategory: any = []
    console.log(news);

    // filtering category
    // wtf is this ??????????????
    for(let i = 0; i < news.length; i++) {
       if(news[i].fields.category === 'top') {
        topCategory.push(news[i])
       }

       if(news[i].fields.category === 'business') {
        businessCategory.push(news[i])
       }

       if(news[i].fields.category === 'politics') {
        politicCategory.push(news[i])
       }

       if(news[i].fields.category === 'health') {
        healthCategory.push(news[i])
       }
       
    }

    console.log(healthCategory);

    
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
                    <Link href={`/news/${item.fields.id}`}>
                        <a>
                            <Box key={item.fields.id}
                            sx={{marginTop : '20px',
                            display : 'flex',
                            alignItems : 'center',
                        }}
                            >
                                <Image src={`https:${item.fields.newsImage.fields.file.url}`}
                                alt={item.fields.title}
                                width={matches ? '250px' : '200px'}
                                height={matches ? '200px' : '100px'}
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
                                        {item.fields.newsTitle}
                                    </Typography>
                                    <Typography variant='body2' component='h6'
                                    sx={{fontFamily : 'Roboto serif'}}
                                    className='newsSubText'
                                    >
                                        {item.fields.publishedTime}
                                    </Typography>
                                </Box>
                            </Box>
                        </a>
                    </Link>
                )
            })}
            <Divider textAlign='left'>Top</Divider>
            { topCategory.map((item : any) => {
                return (
                    <Link href={`/news/${item.fields.id}`}>
                        <a>
                            <Box key={item.fields.id}
                            sx={{marginTop : '20px',
                            display : 'flex',
                            alignItems : 'center',
                            }}
                            >
                                <Image src={`https:${item.fields.newsImage.fields.file.url}`}
                                alt={item.fields.newsTitle}
                                width={matches ? '250px' : '200px'}
                                height={matches ? '200px' : '100px'}
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
                                        {item.fields.newsTitle}
                                    </Typography>
                                    <Typography variant='body2' component='h6'
                                    sx={{fontFamily : 'Roboto serif'}}
                                    className='newsSubText'
                                    >
                                        {item.fields.publishedTime}
                                    </Typography>
                                </Box>
                            </Box>
                        </a>
                    </Link>
                )
            })}
            <Divider textAlign='left'>Politics</Divider>
            { politicCategory.map((item : any) => {
                return (
                    <Link href={`/news/${item.fields.id}`}>
                        <a>
                            <Box key={item.fields.id}
                            sx={{marginTop : '20px',
                            display : 'flex',
                            alignItems : 'center',
                            boxSizing : 'border-box',
                        }}
                            >
                                <Image src={`https:${item.fields.newsImage.fields.file.url}`}
                                alt={item.fields.newsTitle}
                                width={matches ? '250px' : '109px'}
                                height={matches ? '200px' : '100px'}
                                />

                                <Box component='div'
                                sx={{
                                    padding : '10px',
                                }}
                                >
                                    <Typography variant='body2' component='h6'
                                    sx={{fontFamily : 'Roboto serif'}}
                                    className='newsText'
                                    >
                                        {item.fields.newsTitle}
                                    </Typography>
                                    <Typography variant='body2' component='h6'
                                    sx={{fontFamily : 'Roboto serif'}}
                                    className='newsSubText'
                                    >
                                        {item.fields.publishedTime}
                                    </Typography>
                                </Box>
                            </Box>
                        </a>
                    </Link>
                )
            })}
            <Divider textAlign='left'>Health</Divider>
            { healthCategory.map((item : any) => {
                return (
                    <Link href={`/news/${item.fields.id}`}>
                        <a>
                            <Box key={item.fields.id}
                            sx={{marginTop : '20px',
                            display : 'flex',
                            alignItems : 'center',
                            boxSizing : 'border-box',
                        }}
                            >
                                <Image src={`https:${item.fields.newsImage.fields.file.url}`}
                                alt={item.fields.newsTitle}
                                width={matches ? '250px' : '109px'}
                                height={matches ? '200px' : '100px'}
                                className='newsImage'
                                />
                                <Box component='div'
                                sx={{
                                    padding : '10px',
                                }}
                                >
                                    <Typography variant='body2' component='h6'
                                    sx={{fontFamily : 'Roboto serif'}}
                                    className='newsText'
                                    >
                                        {item.fields.newsTitle}
                                    </Typography>
                                    <Typography variant='body2' component='h6'
                                    sx={{fontFamily : 'Roboto serif'}}
                                    className='newsSubText'
                                    >
                                        {item.fields.publishedTime}
                                    </Typography>
                                </Box>
                            </Box>
                        </a>
                    </Link>
                )
            })}
        </Box>
    )
}

export default NewsCategory;