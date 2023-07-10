import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function Home(){
    return(
        <>
            <Box>
            <Typography variant="h1" gutterBottom sx={{textAlign:'center',color:'#ffffff',letterSpacing:'0.2rem',marginTop:'2rem'}}>
                 <span style={{color:'#FF5055'}}>C</span>omputer <span style={{color:'#FF5055'}}>N</span>etworks
            </Typography>
            </Box>
            <Box>
            <Typography variant="h4" gutterBottom sx={{textAlign:'center',color:'#ffffff',letterSpacing:'0.3rem'}}>
                Digital Assignment-2</Typography>
                <Box sx={{margin:'auto', position:'relative',left:'5rem',right:0 ,width:'20rem',top:{xl:'5rem'}}}>
                    <Avatar sx={{marginTop:'1.5rem',height:{xl:'14rem',lg:"12rem",md:'10rem',sm:'8rem',xs:'8rem'},width:{xl:'14rem',lg:"12rem",md:'10rem',sm:'8rem',xs:'8rem'}}}alt="Remy Sharp" src="gif.gif" />
                </Box>
                <Box sx={{width:'20rem',position:'relative',top:{xl:'8rem',lg:'3rem',xs:'2rem'},left:{xl:'2rem',lg:'4rem'},right:0,left:0,margin:'auto'}}>
                    <Box sx={{marginLeft:'2rem'}}>
                    <Typography variant="h5" gutterBottom sx={{color:'#ffffff',fontWeight:'bold',letterSpacing:'0.1rem'}}>Submitted By:</Typography>
                    </Box>
                    <Box sx={{marginTop:'1rem'}}>
                        <Typography sx={{color:'#ffffff',fontWeight:'bold',marginTop:'0.8rem',letterSpacing:'0.1rem'}}><span style={{color:'#FF5055'}}>1.</span> Kaifur Rahman <span style={{color:'#FF5055'}}>21BRS1147</span></Typography>
                        <Typography sx={{color:'#ffffff',fontWeight:'bold',marginTop:'0.8rem',letterSpacing:'0.1rem'}}><span style={{color:'#FF5055'}}>2.</span> Kriti Walia <span style={{color:'#FF5055'}}>21BRS1125</span></Typography>
                        <Typography sx={{marginBottom:'5rem!important',color:'#ffffff',fontWeight:'bold',marginTop:'0.8rem',letterSpacing:'0.1rem'}}><span style={{color:'#FF5055'}}>3.</span> Vrushika Modi <span style={{color:'#FF5055'}}>21BAI1901</span></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Home;