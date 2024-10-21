
import { Box, Button, Container, Rating, Stack, Typography, } from '@mui/material'
import { Intro } from '../../components/intro'
import Banana from '../../assets/banana.svg'
import Orik from '../../assets/orik.svg'
import Apelsin from '../../assets/apelsin.svg'
import BargIcon from '../../assets/icon/barg-icon'
import { Colors } from '../../config/colors'
import Barg2Icon from '../../assets/icon/barg2-icon'
import Endicon from '../../assets/icon/endicon'
import Test from '../../components/product'
import Limon from '../../assets/svg/Background.svg'
import Photo from '../../assets/Photo.svg'
import Stars from '../../assets/stars.svg'
import { red } from '@mui/material/colors'
import Endicon2 from '../../assets/icon/endicon2'
import Food from '../../components/food'
import Eco from '../../assets/Eco.svg'
import Juice1 from '../../assets/juice.svg'
import Juice2 from '../../assets/juice2.svg'
import Juice3 from '../../assets/juice3.svg'
import Pomidor1 from '../../assets/pomidor1.svg'
import Pomidor2 from '../../assets/pomidor2.svg'
import User from '../../assets/user.svg'

export const Home = () => {
  return (
    <>
      <Intro />
      <Box pt={10} pb={16} >
       
        <Container maxWidth="lg">
          <Stack direction={'row'} gap={'10px'}>
            <Box width={'670px'} padding={'109px 0 127px 54px'} sx={{
                backgroundImage: `url(${Banana})`,
                backgroundRepeat: "no-repeat",
            }}
            >  
            <Stack >
              <Typography variant='h4' color='#fff'  fontFamily={'Yellowtail'}>Natural!!</Typography>
              <Typography mt={3} variant='h3' color='#fff' >Get Garden <br /> Fresh Fruits</Typography>
            </Stack>
            </Box>
            <Box width={'670px'} padding={'109px 0 127px 54px'} sx={{
                backgroundImage: `url(${Orik})`,
                backgroundRepeat: "no-repeat",
            }}
            >  
            <Stack >
              <Typography variant='h4' color='Green'   fontFamily={'Yellowtail'}>Offer!!</Typography>
              <Typography mt={3} variant='h3' >Get 10% off <br />
              on Vegetables</Typography>
            </Stack>
            </Box>
          </Stack>
        </Container>
    
      </Box>
      <Box bgcolor={Colors.Silver}>
        <Container maxWidth="lg">
          <Stack direction={'row'}  gap={10}>
          <Stack width={711} height={867} pt={2}>
              <img src={Apelsin} alt="" />
              </Stack>
              <Stack pt={5}>
                <Typography mt={2} variant='h4' color='Green' fontFamily={"Yellowtail"}>
                About Us
                </Typography>
                <Typography mt={2} variant='h2'>
                We Believe in Working
                Accredited Farmers
                </Typography>
                <Typography mt={2} fontSize={"18px"} color='DarkGrey' fontWeight={'400'}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                <Stack pt={3}>
                <Stack pt={3} direction={'row'} gap={2} alignItems={'center'}>
               <BargIcon/>
               <Stack>
               <Typography variant='h6'>Organic Foods Only</Typography>
               <Typography variant='body2' color='DarkGrey'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
               </Stack>
              </Stack>
              <Stack pt={3} direction={'row'} gap={2} alignItems={'center'}>
               <Barg2Icon/>
               <Stack>
               <Typography variant='h6'>Quality Standards</Typography>
               <Typography variant='body2' color='DarkGrey'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
               </Stack>
              </Stack>
              <Box pt={3}>
              <Button endIcon={<Endicon/>} variant='contained' sx={{maxWidth: '220px', height: '79px'}} >Shop Now </Button>
              </Box>
              </Stack>
              </Stack>
             
          </Stack>
        </Container>
      </Box>
      <Box pt={20}>
        <Container maxWidth="lg">
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Typography fontFamily={"Yellowtail"} variant='h4' color='Green'>
        Categories 
        </Typography>
        <Typography variant='h2' pt={1}>
        Our Products
        </Typography>
        </Stack>
        <Box>
         <Test/>
         <Stack  alignItems={'center'}>
          <Button variant='contained' endIcon={<Endicon/>} sx={{maxWidth:'250px'}}>Load More</Button>
         </Stack>
        </Box>
        </Container>
      </Box>
      <Box pt={5}>
      <Container maxWidth={'lg'} sx={{backgroundImage: `url(${Limon})`, backgroundRepeat: 'no-repeat',
          backgroundSize:'100%' }}>
       
        <Stack alignItems={'center'} pt={10}>
          <Typography variant='h4' color='#7EB693' fontFamily={'Yellowtail'}>Testimonial</Typography>
          <Typography variant='h2'>What Our Customer Saying?</Typography>
        </Stack>
       <Stack>
       <Stack pl={78} maxHeight={56} maxWidth={125} mt={10} >
          <img src={Photo} alt="" />
        </Stack>
       
       <Stack ml={78} pt={10} maxWidth={123} maxHeight={26}>
        <img src={Stars} alt="" />
       </Stack>
        <Stack alignItems={'center'}>
          <Typography variant='body2' pt={4} maxWidth={780}  align='center'>
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </Typography>
          <Typography variant='h6' pt={3}>Sara Taylor</Typography>
          <Typography variant='body2'>Consumer</Typography>
        </Stack>
       </Stack>
    

       <hr style={{width:'900px', marginTop:'50px'}}/>
         <Stack alignItems={'center'} direction={'row'} justifyContent={'center'} gap={6} pt={5} pb={10}>
          <Box   sx={{
        width: 180,       // O'lchamlar
        height: 180,
        borderRadius: '50%', // Dumaloq shakil
        overflow: 'hidden',   // O'sishning oldini olish
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid #7EB693',
      }}>
       <Stack alignItems={'center'}> <Typography variant='h2'>100%</Typography>
       <Typography variant='body2'>Organic</Typography></Stack>
        </Box>
        <Box   sx={{
        width: 180,       // O'lchamlar
        height: 180,
        borderRadius: '50%', // Dumaloq shakil
        overflow: 'hidden',   // O'sishning oldini olish
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid #7EB693',
      }}>
       <Stack alignItems={'center'}> <Typography variant='h2'>285</Typography>
       <Typography variant='body2'>Active Product</Typography></Stack>
        </Box>
        <Box   sx={{
        width: 180,       // O'lchamlar
        height: 180,
        borderRadius: '50%', // Dumaloq shakil
        overflow: 'hidden',   // O'sishning oldini olish
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid #7EB693',
      }}>
       <Stack alignItems={'center'}> <Typography variant='h2'>350+</Typography>
       <Typography variant='body2'>Organic Orchads</Typography></Stack>
        </Box>
        <Box   sx={{
        width: 180,       // O'lchamlar
        height: 180,
        borderRadius: '50%', // Dumaloq shakil
        overflow: 'hidden',   // O'sishning oldini olish
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid #7EB693',
      }}>
       <Stack alignItems={'center'}> <Typography variant='h2'>25+</Typography>
       <Typography variant='body2'>Years of Farming</Typography></Stack>
        </Box>
         </Stack>
      </Container>
      </Box>
      <Box sx={{bgcolor:'#274C5B'}}>
        <Container maxWidth='lg'>
          <Stack pt={15}>
            <Typography color='#7EB693' variant='h4' fontFamily={'Yellowtail'}>
            Offer
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant='h2' color='#fff'>We Offer Organic For You</Typography>
            <Button  endIcon={<Endicon2/>}  sx={{backgroundColor:'#EFD372'}}><Typography variant='body2'>View All Product</Typography></Button>
          </Stack>
          <Stack pt={0}>
           <Food/>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='lg'>
          <Stack direction={'row'} alignItems={'center'}>
          <Stack maxWidth={'700px'}>
            <img src={Eco} alt="" />
          </Stack>
          <Stack maxWidth={'600px'}  position={'absolute'} ml={'600px'} bgcolor={'#fff'} sx={{borderRadius:'15px'}} p={10}  >
           <Typography variant='h4' fontFamily={'Yellowtail'} color='#7EB693'>Eco Friendly</Typography>
           <Typography variant='h2' color='#274C5B' pt={'5px'}>Econis is a Friendly
           Organic Store</Typography>
           <Stack pt={'15px'}>
            <Typography variant='h6' color='#274C5B'>Start with Our Company First</Typography>
            <Typography variant='body2' color='#525C60'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
            </Typography>
           </Stack>
           <Stack pt={'15px'}>
           <Typography variant='h6' color='#274C5B'>Learn How to Grow Yourself</Typography>
            <Typography variant='body2' color='#525C60'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
            </Typography>
           </Stack>
           <Stack pt={'15px'}>
           <Typography variant='h6' color='#274C5B'>Farming Strategies of Today</Typography>
            <Typography variant='body2' color='#525C60'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
            </Typography>
           </Stack>
          </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bgcolor={'#F1F8F4'}>
        <Container maxWidth='lg'>
          <Stack py={15} direction={'row'} justifyContent={'space-between'}>
        <Stack>
          <Stack maxHeight={'500px'} maxWidth={'450px'}>
            <img src={Juice1} alt="" /> 
          </Stack>
          <Stack position={'absolute'} mt={'170px'} ml={'85px'}>
          <Typography  bgcolor={'#fff'} width={'250px'} textAlign={'center'} p={3} borderRadius={'15px'} color='#274C5B' variant='h6'>Organic Juice</Typography>
          </Stack>
          </Stack>
          <Stack>
          <Stack maxHeight={'500px'} maxWidth={'450px'}>
            <img src={Juice2} alt="" /> 
          </Stack>
          <Stack position={'absolute'} mt={'170px'} ml={'85px'}>
          <Typography  bgcolor={'#fff'} width={'250px'} textAlign={'center'} p={3} borderRadius={'15px'} color='#274C5B' variant='h6'>Organic Food</Typography>
          </Stack>
          </Stack>
          <Stack>
          <Stack maxHeight={'500px'} maxWidth={'450px'}>
            <img src={Juice3} alt="" /> 
          </Stack>
          <Stack position={'absolute'} mt={'170px'} ml={'85px'}>
          <Typography  bgcolor={'#fff'} width={'250px'} textAlign={'center'} p={3} borderRadius={'15px'} color='#274C5B' variant='h6'>Nuts Cookis</Typography>
          </Stack>
          </Stack>
        </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='lg'>
          <Stack py={15}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'end'}>
             <Stack>
             <Typography variant='h4' color='#7EB693' fontFamily={'yellowtail'}>
              News
              </Typography>
              <Typography pt={'10px'} variant='h2' maxWidth={'750px'}>
              Discover weekly content about organic food, & more
              </Typography>
             </Stack>
             <Stack>
              <Button endIcon={<Endicon2/>} sx={{p:'10px', width:'220px', height:'80px', borderRadius:'15px', border:'2px solid #274C5B'}}><Typography variant='body2' color='#274C5B'>More News</Typography></Button>
             </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} pt={'60px'}>
            <Stack>
            <Stack position={'absolute'} mt={'25px'} ml={'25px'} sx={{ borderRadius:'50%', bgcolor:'#fff', width:'80px', height:'80px'}}>
                    <Typography variant='body1' p={'13px'} align='center'>25 <br /> Nov</Typography>
                  </Stack>
              <Stack maxHeight={'570px'} maxWidth={'670px'}>
                <img src={Pomidor1} alt="" />
              </Stack>
              <Stack p={6} ml={'20px'} mt={'-250px'} maxWidth={'530px'} maxHeight={'330px'} bgcolor={'#fff'} borderRadius={'15px'} boxShadow={2}>
                <Stack>
                 
                  <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                    <img width={'18px'} height={'20px'} src={User} alt="" />
                   <Typography variant='body2' color='#274C5B'>By Rachi Card</Typography>
                  </Stack>
                  <Stack pt={'30px'}>
                    <Typography variant='h6' color='#274C5B' fontSize={'25px'}>The Benefits of Vitamin D & How to Get It</Typography>
                    <Typography variant='body2' maxWidth={'400px'} color='#525C60'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                    <Stack pt={'15px'}>
                    <Button sx={{width:'220px', height:'70px', borderRadius:'15px', bgcolor:'#EFD372',}} endIcon={<Endicon2/>}><Typography variant='body2' color='#274C5B'>Read More</Typography></Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
            <Stack position={'absolute'} mt={'25px'} ml={'25px'} sx={{ borderRadius:'50%', bgcolor:'#fff', width:'80px', height:'80px'}}>
                    <Typography variant='body1' p={'13px'} align='center'>25 <br /> Nov</Typography>
                  </Stack>
              <Stack maxHeight={'570px'} maxWidth={'670px'}>
                <img style={{borderRadius:'30px'}} src={Pomidor2} alt="" />
              </Stack>
              <Stack p={6} ml={'20px'} mt={'-250px'} maxWidth={'530px'} maxHeight={'330px'} bgcolor={'#fff'} borderRadius={'15px'} boxShadow={2}>
                <Stack>
                 
                  <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                    <img width={'18px'} height={'20px'} src={User} alt="" />
                   <Typography variant='body2' color='#274C5B'>By Rachi Card</Typography>
                  </Stack>
                  <Stack pt={'30px'}>
                    <Typography variant='h6' color='#274C5B' fontSize={'25px'}>Our Favourite Summertime Tommeto</Typography>
                    <Typography variant='body2' maxWidth={'400px'} color='#525C60'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                    <Stack pt={'15px'}>
                    <Button sx={{width:'220px', height:'70px', borderRadius:'15px', bgcolor:'#EFD372',}} endIcon={<Endicon2/>}><Typography variant='body2' color='#274C5B'>Read More</Typography></Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
