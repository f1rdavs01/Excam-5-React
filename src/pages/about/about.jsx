import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Banner from '../../assets/aboutbanner.svg'
import Intro from '../../assets/aboutintro.svg'
import Traktor1 from '../../assets/traktor1.svg'
import Traktor2 from '../../assets/traktor2.svg'
import Endicon from '../../assets/icon/endicon'
import Cyrcleicon from '../../assets/icons/cyrcleicon'
import Cyrcle from '../../assets/cyrcle.svg'
import Why from '../../assets/why.svg'
import Fresh1 from '../../assets/fresh1.svg'
import Fresh2 from '../../assets/fresh2.svg'
import Fresh3 from '../../assets/fresh3.svg'
import Fresh4 from '../../assets/fresh4.svg'
import Face1 from '../../assets/face1.svg'
import Face2 from '../../assets/face2.svg'
import Face3 from '../../assets/face3.svg'
import MiniFacebook from '../../assets/minifacebook.svg'
import MiniTwitter from '../../assets/minitwitter.svg'
import MiniInstagram from '../../assets/miniinstagram.svg'
import Anor1 from '../../assets/anor1.svg'
import Anor2 from '../../assets/anor2.svg'
import Anor3 from '../../assets/anor3.svg'
import Anor4 from '../../assets/anor4.svg'

export default function About() {
  return (
    <>
     <Box>
        <Container maxWidth={'xs'}>
           <Stack>
            <img src={Banner} alt="" />
           </Stack>
           </Container>
           <Container maxWidth={'lg'}>
              <Stack direction={'row'} alignItems={'center'} py={20} gap={'30px'} >
                <Stack maxHeight={'800px'} maxWidth={'800px'} ml={'-90px'}>
                    <img src={Intro} alt="" />
                </Stack>
                <Stack>
                    <Typography variant='h4' color='#7EB693' fontFamily={'yellowtail'}>About Us</Typography>
                    <Typography pt={'20px'} maxWidth={'674px'} variant='h2'>We do Creative <br />
                    Things for Success</Typography>
                    <Typography pt={'30px'} maxWidth={'580px'} variant='body2'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                    <Typography pt={'30px'} maxWidth={'580px'} variant='body2'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                    <Stack pt={'30px'} direction={'row'}>
                    <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                        <img src={Traktor1} alt="" />
                        <Typography maxWidth={'250px'} fontWeight={'500'} variant='h6'>Modern Agriculture Equipment</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
                        <img src={Traktor2} alt="" />
                        <Typography maxWidth={'220px'} fontWeight={'500'} variant='h6'>No growth hormones are used</Typography>
                    </Stack>
                </Stack>
                <Stack pt={'50px'}>
                <Button  variant='contained' endIcon={<Endicon/>} sx={{maxWidth:'250px', maxHeight:'80px'}}><Typography fontSize={'18px'} color='#fff' fontWeight={'600'} width={'220px'}>Explore More</Typography></Button>
                </Stack>
                </Stack>
               
               
              </Stack>
             
           </Container>
           <Box py={20} bgcolor={'#F9F8F8'}>
            <Container maxWidth={'lg'}>
           <Stack  direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack>
                        <Typography variant='h3' fontFamily={'yellowtail'} color='#7EB693'>
                        Why Choose us?
                        </Typography>
                        <Typography pt={'20px'} variant='h2' maxWidth={'564px'}>We do not buy from the open market & traders.</Typography>
                        <Typography pb={'40px'} pt={'30px'} maxWidth={'580px'} fontSize={'18px'} fontWeight={'400'} color='#525C60'  lineHeight={'29.77px'}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Typography>
                        <Stack   gap={'10px'} direction={'row'} alignItems={'center'} maxWidth={'320px'} justifyContent={'center'}  bgcolor={'#ECECEC'} p={'30px'} sx={{borderRadius:'40px',}}>
                            <img style={{width:'19px', height:'19px'}} src={Cyrcle} alt="" />
                             <Typography variant='body1'>100% Natural Product</Typography>
                        </Stack>
                        <Typography pb={'40px'}  variant='body2' ml={'100px'} pt={'20px'} maxWidth={'440px'}>Simply dummy text of the printing and typesetting <br /> industry Lorem Ipsum</Typography>
                        <Stack   gap={'10px'} direction={'row'} alignItems={'center'} maxWidth={'320px'} justifyContent={'center'}  bgcolor={'#ECECEC'} p={'30px'} sx={{borderRadius:'40px',}}>
                            <img style={{width:'19px', height:'19px'}} src={Cyrcle} alt="" />
                             <Typography variant='body1'>Increases resistance</Typography>
                        </Stack>
                        <Typography pb={'40px'}  variant='body2' ml={'100px'} pt={'20px'} maxWidth={'440px'}>Filling, and temptingly healthy, our Biona Organic <br /> Granola with Wild Berries is just the thing</Typography>
                    </Stack>
                    <Stack>
                        <img style={{borderRadius:'30px'}} src={Why} alt="" />
                    </Stack>
                </Stack>
                <Stack className='wrapper' direction={'row'} pt={'50px'} justifyContent={'center'} gap={'20px'}>
                    <Stack width={'227px'} height={'325px'} bgcolor={"#fff"} p={'30px'} borderRadius={'30px'} justifyContent={'center'}>
                        <Stack alignItems={'center'} >
                            <img style={{width:"95px", height:'95px'}} src={Fresh1} alt="" />
                        </Stack>
                        <Stack alignItems={'center'}>
                        <Typography  pt={'30px'} variant='h6'>Return Policy</Typography>
                        <Typography maxWidth={'184px'} pt={'15px'} align='center' variant='body2'>Simply dummy text of the printintypesetting industry.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width={'227px'} height={'325px'} bgcolor={"#fff"} p={'30px'} borderRadius={'30px'} justifyContent={'center'}>
                        <Stack alignItems={'center'} >
                            <img style={{width:"95px", height:'95px'}} src={Fresh2} alt="" />
                        </Stack>
                        <Stack alignItems={'center'}>
                        <Typography  pt={'30px'} variant='h6'>100% Fresh</Typography>
                        <Typography maxWidth={'184px'} pt={'15px'} align='center' variant='body2'>Simply dummy text of the printintypesetting industry.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width={'227px'} height={'325px'} bgcolor={"#fff"} p={'30px'} borderRadius={'30px'} justifyContent={'center'}>
                        <Stack alignItems={'center'} >
                            <img style={{width:"95px", height:'95px'}} src={Fresh3} alt="" />
                        </Stack>
                        <Stack alignItems={'center'}>
                        <Typography  pt={'30px'} variant='h6'>Support 24/7</Typography>
                        <Typography maxWidth={'184px'} pt={'15px'} align='center' variant='body2'>Simply dummy text of the printintypesetting industry.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width={'227px'} height={'325px'} bgcolor={"#fff"} p={'30px'} borderRadius={'30px'} justifyContent={'center'}>
                        <Stack alignItems={'center'} >
                            <img style={{width:"95px", height:'95px'}} src={Fresh4} alt="" />
                        </Stack>
                        <Stack alignItems={'center'}>
                        <Typography  pt={'30px'} variant='h6'>Secured Payment
                        </Typography>
                        <Typography maxWidth={'184px'} pt={'15px'} align='center' variant='body2'>Simply dummy text of the printintypesetting industry.</Typography>
                        </Stack>
                    </Stack>
                    </Stack>
                </Container>
           </Box>
           <Box py={20}>
            <Container maxWidth={'lg'}>
              <Stack alignItems={'center'}>
                <Typography variant='h4' fontFamily={'yellowtail'} color='#7EB693'>Team</Typography>
                <Typography pt={'20px'} variant='h2'>Our Organic Experts</Typography>
                <Typography pt={'30px'} align='center' variant='body2' maxWidth={'852px'}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
              </Stack>
              <Stack className='wrapper' direction={'row'} justifyContent={'space-between'} pt={'70px'}>
                <Stack maxWidth={'449px'} maxHeight={'615px'}>
                    <Stack>
                 <img style={{width:'100%'}} src={Face1} alt="" />
                 </Stack>
                 <Stack sx={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px',}} px={'20px'} py={'40px'} bgcolor={'#F9F8F8'} direction={'row'} alignItems={'end'} justifyContent={'space-between'}>
                <Stack>
                <Typography variant='h6'>
                 Giovani Bacardo
                 </Typography>
                 <Typography pt={'10px'} variant='body1' fontFamily={'yellowtail'} color='#7EB693'>
                 Farmer
                 </Typography>
                </Stack>
                <Stack direction={'row'} gap={'10px'}>
                    <img style={{width:'23px', height:'19px'}} src={MiniFacebook} alt="" />
                    <img style={{width:'23px', height:'19px'}} src={MiniTwitter} alt="" />
                </Stack>
                </Stack>
                </Stack>
                <Stack maxWidth={'449px'} maxHeight={'615px'}>
                    <Stack>
                 <img style={{width:'100%'}} src={Face2} alt="" />
                 </Stack>
                 <Stack sx={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px',}} px={'20px'} py={'40px'} bgcolor={'#F9F8F8'} direction={'row'} alignItems={'end'} justifyContent={'space-between'}>
                <Stack>
                <Typography variant='h6'>
                Marianne Loreno
                 </Typography>
                 <Typography pt={'10px'} variant='body1' fontFamily={'yellowtail'} color='#7EB693'>
                 Designer
                 </Typography>
                </Stack>
                <Stack direction={'row'} gap={'10px'}>
                    <img style={{width:'23px', height:'19px'}} src={MiniInstagram} alt="" />
                    <img style={{width:'23px', height:'19px'}} src={MiniFacebook} alt="" />
                    <img style={{width:'23px', height:'19px'}} src={MiniTwitter} alt="" />
                </Stack>
                </Stack>
                </Stack>
                <Stack maxWidth={'449px'} maxHeight={'615px'}>
                    <Stack>
                 <img style={{width:'100%'}} src={Face3} alt="" />
                 </Stack>
                 <Stack sx={{ borderBottomLeftRadius: '25px', borderBottomRightRadius: '25px',}} px={'20px'} py={'40px'} bgcolor={'#F9F8F8'} direction={'row'} alignItems={'end'} justifyContent={'space-between'}>
                <Stack>
                <Typography variant='h6'>
                Riga Pelore
                 </Typography>
                 <Typography pt={'10px'} variant='body1' fontFamily={'yellowtail'} color='#7EB693'>
                 Farmer
                 </Typography>
                </Stack>
                <Stack direction={'row'} gap={'10px'}>
                    <img style={{width:'23px', height:'19px'}} src={MiniInstagram} alt="" />
                    <img style={{width:'23px', height:'19px'}} src={MiniFacebook} alt="" />
                    <img style={{width:'23px', height:'19px'}} src={MiniTwitter} alt="" />
                </Stack>
                </Stack>
                </Stack>
              </Stack>
            </Container>
           </Box>
           <Box py={20} bgcolor={'#274C5B'}>
            <Container maxWidth={'lg'}> 
             <Stack alignItems={'center'}>
                <Typography variant='h4' fontFamily={'yellowtail'} color='#7EB693'>
                About Us
                </Typography>
                <Typography pt={'10px'} variant='h2' color='#fff'>What We Offer for You</Typography>
             </Stack>
             <Stack className='wrapper' direction={'row'} justifyContent={'space-between'} pt={10}>
             <Stack>
                <Stack  height={'305px'} width={'305px'} bgcolor={'#fff'} sx={{borderRadius:'30px'}}>
                <img  src={Anor1} alt="" />
                </Stack>
                <Typography variant='h6' pt={'25px'} align='center' color='#fff'>Spicy</Typography>
              </Stack>
              <Stack>
                <Stack  height={'305px'} width={'305px'} bgcolor={'#fff'} sx={{borderRadius:'30px'}}>
                <img  src={Anor2} alt="" />
                </Stack>
                <Typography variant='h6' pt={'25px'} align='center' color='#fff'>Nuts & Feesd</Typography>
              </Stack>
              <Stack>
                <Stack  height={'305px'} width={'305px'} bgcolor={'#fff'} sx={{borderRadius:'30px'}}>
                <img  src={Anor3} alt="" />
                </Stack>
                <Typography variant='h6' pt={'25px'} align='center' color='#fff'>Fruits</Typography>
              </Stack>
              <Stack>
                <Stack  height={'305px'} width={'305px'} bgcolor={'#fff'} sx={{borderRadius:'30px'}}>
                <img  src={Anor4} alt="" />
                </Stack>
                <Typography variant='h6' pt={'25px'} align='center' color='#fff'>Vegetable</Typography>
              </Stack>
             </Stack>
            </Container>
           </Box>
     </Box>
    </>
  )
}
