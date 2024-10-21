import { Box, Button, Container, Rating, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import data from '../data/data';
import ProductSlice from './productslice';
import Endicon from '../assets/icon/endicon';
import Single from '../assets/single.svg'



export default function ProductPage() {
    const { id } = useParams();
    const product = data.products.find((item) => item.id === parseInt(id)); 
    const item = product || null;

    return (
        <>
        <Box>
            <Container maxWidth={'xs'}>
                <Stack>
                    <img src={Single} alt="" />
                </Stack>
            </Container>
        </Box>
            {item ? (
                <>
                <Box bgcolor={'#F9F8F8'}>
                    <Container maxWidth={'lg'}>
                        <Stack direction={'row'} py={10} gap={'100px'} alignItems={'center'}>
                            <Stack>
                            <Box position={'absolute'} padding={4}>
                                    <Typography variant='body2' bgcolor={'#274C5B'} p={1} borderRadius={2} color={'#fff'}>
                                    {item.buttontitle}
                                    </Typography>
                                   
                                    </Box>
                    <img style={{ width: '490px', height: '460px',borderRadius:'30px' }} src={item.img} alt={item.title} />

                    </Stack>
                    <Stack>
                    <Typography variant='h3'>{item.title}</Typography>
                    <Rating sx={{pt:'15px'}} value={item.rating} precision={1}/>
                    <Stack pt={'15px'} direction={'row'} gap={'10px'} alignItems={'center'}>
                    <Typography fontWeight={'600'} fontSize={'20px'} sx={{textDecoration: 'line-through}'}} color='#b8b8b8'>
                                            {item.price}
                                        </Typography>
                                        <Typography variant='h6' color='#274c5b'>
                                            {item.price2}
                                        </Typography>
                    </Stack>
                    <Typography pt={'20px'} maxWidth={'658px'} variant='body2' color='#525C60'>Simply dummy text of the printing and typesetting industry. Lorem had <br /> ceased to been the industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley.</Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={'20px'} pt={'20px'}>
                        <Typography variant='body1'>Quantity :</Typography>
                       <input style={{padding:'20px', maxWidth:'50px', maxHeight:'70px', border:'2px solid #274C5B', borderRadius:'15px'}} type="text" placeholder='1' />
                       <Button variant='contained' sx={{maxHeight:'63px'}} endIcon={<Endicon/>}><Typography variant='body2' color='#fff'>Add To Cart</Typography></Button>
                    </Stack>
                    </Stack>
                   
                    </Stack>
                    
                    </Container>
                    </Box>
                    <Box>
                        <Container maxWidth={'lg'}>
                        <Stack pt={'50px'} direction={'row'} justifyContent={'center'} gap={'20px'}>
                        <Button variant='contained'><Typography color='#fff' variant='h6'>Product Description</Typography></Button>
                        <Button variant='contained' sx={{bgcolor:'#EFF6F1'}}><Typography variant='h6'>Additional Info</Typography></Button>
                        </Stack>
                        <Stack alignItems={'center'} pt={'30px'}>
                        <Typography variant='body2' textAlign={'center'} maxWidth={'1000px'}>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</Typography>
                        </Stack>
                        </Container>
                    </Box>
                </>
            ) : (
                <Typography variant="h6">Topilmadi</Typography>
            )}

            <Box pt={'40px'}>
                <Container maxWidth={'lg'}>
                    <Stack alignItems={'center'} pt={'120px'}>
                    <Typography variant='h2'>Related Products</Typography>
                    </Stack>
                    <Stack mt={'-50px'}>
           <ProductSlice/>
           </Stack>
           </Container>
           </Box>
        </>
    );
}
