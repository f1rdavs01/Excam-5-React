import React from 'react'
import Logo from "../../assets/svg/logo.svg"
import { Container, IconButton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Colors } from '../../config/colors'
import { HeaderSearch } from './header-search/header-search'

const Links = styled(Link)`
    text-decoration: none;
    color: ${Colors.DarkGreen};
`

export default function Header() {
  return (
 <>
 <Stack py={5}>
  <Container maxWidth="lg">
   <Stack direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
    <Stack maxWidth={"198px"}>
      <img src={Logo} alt="" />
    </Stack>
    <Stack direction={'row'} gap={"40px"}>
      <Links to={'/home'} >
      <Typography variant='body1'>Home</Typography>
      </Links>
      <Links to={'/about'}>
      <Typography variant='body1'>About</Typography>
      </Links>
      <Links>
      <Typography variant='body1'>Pages</Typography>
      </Links>
      <Links to={'/shop'}>
      <Typography variant='body1'>Shop</Typography>
      </Links>
      <Links>
      <Typography variant='body1'>Projects</Typography>
      </Links>
      <Links>
      <Typography variant='body1'>News</Typography>
      </Links>
     
    </Stack>
    <HeaderSearch/>
   </Stack>
  </Container>
 </Stack>
 </>
  )
}
