import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Product from '../../components/product'
import Shopbanner from '../../assets/shopbanner.svg'

export default function Shop() {
  return (
    <>
    
  
   
      <Box>

      <Container maxWidth={'xs'}>
           <Stack>
            <img src={Shopbanner} alt="" />
           </Stack>
           </Container>

        <Container maxWidth={'lg'}>
          <Product/>
        </Container>
      </Box>
    </>
  )
}
