import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Colors } from '../config/colors';
import banner from "../assets/hero-2.jpg"
import styled from '@emotion/styled';

 const CustomButton = styled(Button)({
    fontWeight: "700",
    fontSize: "20px",
    color: `${Colors.DarkGreen}`,
    padding: "28px 39px 28px 39px",
    backgroundColor: `${Colors.Yellow}`,
    borderRadius: "16px",
  });



export const Intro = () => {
    return (
        <Container maxWidth="lg">
        <Box py={'150px'} sx={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        }}
        >
            <Container maxWidth="lg">
                <Stack maxWidth={'530px'}>
                    <Typography mb={'8px'} color='#68a47f' fontFamily={'Yellowtail'} fontWeight={400} variant='h4'>100% Natural Food</Typography>
                    <Typography mb={'23px'} color={Colors.DarkGreen} variant='h1'>Choose the best
                        healthier way <br />
                        of life
                    </Typography>
                    <CustomButton sx={{width: '240px'}} variant='contained'>Explore Now</CustomButton>
                </Stack>
            </Container>
        </Box>
        </Container>
    )
}