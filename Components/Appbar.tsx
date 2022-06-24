import {
    IconButton,AppBar,Toolbar,
    Typography,Accordion, AccordionSummary,AccordionDetails,
    Box,Divider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';
import {useMediaQuery,Button,Menu,MenuItem} from '@mui/material';
import Link from 'next/link'

const Appbar = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const [open,setOpen] = useState(false);
    const [anchorEl,setAnchorEl] = useState(null);

    const menuOpen = Boolean(anchorEl);

    const handleClick = (e : any) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleDrawerOpen = () => {
        setOpen(!open);
    }
    return (
        <div>
            {
            <AppBar position='static'
            sx={{
                backgroundColor : '#3891A6'
            }}
            >
                <Toolbar
                sx={{
                    display : 'flex',
                    justifyContent : 'space-between',
                }}
                >
                    <Link href='/'><a><Typography>Hare News</Typography></a></Link>
                    {/* removing mobile nav in 600 px */}
                    {matches ? 
                        <ul className='tabletNav'>
                            <li>
                                <Button
                                id='news-menu'
                                aria-controls={menuOpen ? 'nav-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={menuOpen ? 'true' : undefined}
                                onClick={handleClick}
                                variant='text'
                                disableRipple
                                sx={{color : 'white', fontFamily : 'Roboto serif', fontWeight : '400'}}
                                >News</Button>
                                <Menu
                                id="nav-menu"
                                anchorEl={anchorEl}
                                open={menuOpen}
                                onClose={handleClose}
                                MenuListProps={{
                                  'aria-labelledby': 'news-menu',
                                }}
                                >
                                    <MenuItem onClick={handleClose}>Health</MenuItem>
                                    <MenuItem onClick={handleClose}>Environment</MenuItem>
                                    <MenuItem onClick={handleClose}>Business</MenuItem>
                                    <MenuItem onClick={handleClose}>Politic</MenuItem>
                                </Menu>
                            </li>
                            <li><Link href='/videos'><a>Videos</a></Link></li>
                            <li><Link href='/contributor'><a>Contributor</a></Link></li>
                        </ul>
                    : 
                    <IconButton onClick={handleDrawerOpen}>
                        <MenuIcon sx={{color : '#fff'}} />
                    </IconButton>}
                </Toolbar>
            </AppBar>
            }
            {/* nav menu */}
            { open ? (
                <Box >
                    <nav>
                        <Accordion disableGutters elevation={0}>
                            <AccordionSummary 
                            expandIcon={<ExpandMoreIcon  />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography sx={{fontFamily : 'Roboto Serif'}}>News</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className='menu-list'>
                                    <li><Link href='./news/business'><a>Business</a></Link></li>
                                    <li><Link href='./news/health'><a>Health</a></Link></li>
                                    <li><Link href='./news/environment'><a>Environment</a></Link></li>
                                    <li><Link href='./news/politic'><a>Politic</a></Link></li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disableGutters elevation={0}>
                            <AccordionSummary 
                            expandIcon={<ExpandMoreIcon  />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Typography sx={{fontFamily : 'Roboto Serif'}}>Videos</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className='menu-list'>
                                    <li><Link href='./news/business'><a>Contributor</a></Link></li>
                                    <li><Link href='./news/health'><a>Street Journalist</a></Link></li>
                                    <li><Link href='./news/environment'><a>Award Winning</a></Link></li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disableGutters elevation={0}>
                        <AccordionSummary 
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                                <Link href='./contributor'><a>Contributor</a></Link>
                            </AccordionSummary>
                        </Accordion>
                        <Divider />
                        <Typography sx={{fontFamily : 'Roboto Serif',
                         textAlign:'center',
                         marginTop : '10px'
                         }}>Visit our social media page</Typography>
                        <Box sx={{
                            display : 'flex',
                            alignItems : 'center',
                            justifyContent : 'center',
                            gap : '20px',
                            marginTop : '1rem'
                        }}>
                            <Link href='/'><a><FacebookIcon fontSize='large' sx={{color : 'blue'}}/></a></Link>
                            <Link href='/'><a><InstagramIcon fontSize='large' sx={{color : '#8a3ab9'}}/></a></Link>
                            <Link href='/' ><a><YouTubeIcon fontSize='large' sx={{color : 'red'}}/></a></Link>
                        </Box>
                    </nav>
                </Box>
            ) : null }
        </div>
    )
}

export default Appbar;