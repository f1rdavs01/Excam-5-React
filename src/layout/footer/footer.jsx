import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Footersvg from '../../assets/footer.svg'
import FooterLogo from '../../assets/footerlogo.svg'
import Instagram from "../../assets/icon/instagram";
import Facebook from "../../assets/icon/facebook";
import Twitter from "../../assets/icon/twitter";
import Pinterest from "../../assets/icon/painterest";


export default function Footer() {
  return (
    <>
     <Box pt={20}>
      <Container maxWidth={'lg'} >
         <Stack  sx={{backgroundImage: `url(${Footersvg})`, backgroundRepeat: 'no-repeat',
          backgroundSize:'100%', borderRadius:'30px' }}>
            <Stack direction={"row"} justifyContent={'space-between'} alignItems={"center"} p={'100px 50px'}>
            <Stack >
          <Typography variant="h2" color="#FFFFFF" maxWidth={'357px'}>
          Subscribe to our Newsletter
          </Typography>
          </Stack>
          <Stack direction={"row"} gap={'10px'}>
            <input style={{width:'345px', height:'50px', border:'none', borderRadius:'20px',  padding:'10px' }} type="text" placeholder="Your Email Address" />
            <Button sx={{bgcolor:'#274C5B', width:'220px', borderRadius:'20px'}}><Typography variant="body2" color="#fff">Subscribe</Typography></Button>
          </Stack>
          </Stack>
         </Stack>
         <Stack direction={"row"} justifyContent={'center'} gap={'100px'} pt={'70px'}>
         <Stack>
            <Stack maxWidth={'285px'} alignItems={'end'}>
              <Typography pt={'5px'} variant="h5">
              Contact Us
              </Typography>
              <Typography pt={'25px'} variant="body2" fontWeight={'700'}>Email</Typography>
              <Typography variant="body2">needhelp@Organia.com</Typography>
              <Typography pt={'25px'} variant="body2" fontWeight={'700'}>Phone</Typography>
              <Typography variant="body2">666 888 888</Typography>
              <Typography pt={'25px'} variant="body2" fontWeight={'700'}>Address</Typography>
              <Typography variant="body2">88 road, borklyn street, USA</Typography>
            </Stack>
            <hr  style={{height:'270px', position:'absolute', marginLeft:'250px'}}/>
         </Stack>
         <Stack>
            <Stack  alignItems={'center'}>
              <Typography pt={'5px'} variant="h5">
              <img src={FooterLogo} alt="" />
              </Typography>
              <Typography pt={'25px'} variant="body2" align="center" >Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum simply dummy text of the printing</Typography>
             <Stack direction={"row"} gap={'12px'} pt={'50px'}>
              <Instagram/>
              <Facebook/>
              <Twitter/>
              <Pinterest/>
             </Stack>
            </Stack>
            <hr  style={{height:'270px', position:'absolute', marginLeft:'500px'}}/>
         </Stack>
         <Stack>
            <Stack maxWidth={'285px'} alignItems={'start'} ml={'30px'}>
              <Typography pt={'5px'} variant="h5">
              Utility Pages
              </Typography>
              <Typography pt={'20px'} variant="body2">Style Guide
              </Typography>
              <Typography pt={'20px'} variant="body2">404 Not Found
              </Typography>
              <Typography pt={'20px'} variant="body2">Password Protected

              </Typography>
              <Typography pt={'20px'} variant="body2">Licences
              </Typography>
              <Typography pt={'20px'} variant="body2">Changelog
              </Typography>
              
            </Stack>
           
         </Stack>
         </Stack>
        
      </Container>
      <hr style={{marginTop:'100px'}} />
         <Stack alignItems={'center'}>
          <Typography variant="body2">Copyright © <span style={{fontWeight:'700'}}>Organick</span> | Designed by VictorFlow Templates - Powered by <span style={{fontWeight:'700'}}>Webflow</span></Typography>
         </Stack>
     </Box>
    </>
  )
}
