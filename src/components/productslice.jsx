import React from 'react'
import { Stack, Grid2, Box,  Rating, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import data from '../data/data'
export default function ProductSlice() {
  return (
    <>
       <Grid2 pt={15} container spacing={'20px'} mb={'122px'}>
                        {data.products.slice(0, 4).map((item) => (
                            <Grid2
                                boxShadow={1}
                                key={item.id}
                                size={{ lg: 3 }}
                                borderRadius={'30px'}
                                bgcolor={'#F9F8F8'}
                                sx={{
                                    width: '355px',
                                    padding: '',
                                    '&:hover': {
                                    },
                                }}
                            >
                                <Box position={'absolute'} padding={2}>
                                    <Typography variant='body2' bgcolor={'#274C5B'} p={1} borderRadius={2} color={'#fff'}>
                                    {item.buttontitle}
                                    </Typography>
                                   
                                    </Box>
                                <img width={'100%'} height={380} src={item.img} alt="img" />
                                <NavLink to={`/product-page/${item.id}`}   style={{ textDecoration: 'none' }}>
                                    <Typography
                                    pt={4}
                                    pb={1}
                                        marginLeft={'30px'}
                                        variant='body1'
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer',
                                                color: '#046d24',
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </NavLink>
                                <hr style={{ width: '279px' }} />
                                <Stack direction={'row'} py={1} pb={2} gap={'32px'} alignItems={'center'}>
                                    <Stack marginLeft={'30px'} direction={'row'} gap={'8px'} alignItems={'center'}>
                                        <Typography variant='body2' sx={{textDecoration: 'line-through}'}} color='#b8b8b8'>
                                            {item.price}
                                        </Typography>
                                        <Typography fontWeight={'700'} fontSize={'18px'} color='#274c5b'>
                                            {item.price2}
                                        </Typography>
                                    </Stack>
                                    <Rating value={item.rating} precision={1} />
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
    </>
  )
}