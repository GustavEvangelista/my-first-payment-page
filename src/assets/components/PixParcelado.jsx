import React from 'react'
import { NunitoTypography } from './Pix'
import { Box, Checkbox, Divider } from '@mui/material'
import RectangleImg from '../img/Rectangle.png'

const PixParcelado = () => {
    return (
        <Box sx={{
            border: "1px solid #333",
            borderRadius: "10px",
            margin: "20px"
        }}
            position="relative"
            width="100%"
            height="508px">

            <Box
                sx={{
                    position: 'absolute',
                    width: '100px',
                    top: '-11px',
                    left: '15px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'black',
                    background: '#aeabab',
                }}

            >
                <NunitoTypography variant='body2' fontWeight="bold">Pix Parcelado</NunitoTypography>
            </Box>

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                paddingTop="15px"
                paddingLeft="15px"
            >2x R$15.300,00 <Checkbox />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$30.600,00</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                paddingTop="15px"
                paddingLeft="15px"
            >3x R$10.196,66 <Checkbox />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$30.620,00</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                paddingTop="15px"
                paddingLeft="15px"
            >4x R$7.725,00 <Checkbox />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$30.900,00</NunitoTypography>

            <Box sx={{
                position: 'relative',
                padding: '0 15px',
                gap: '10px'
            }}>

                <img src={RectangleImg} alt="offer tag" width="100%" />

                <NunitoTypography
                    paddingLeft='25px'
                    color='#fff'
                    variant='caption'
                    position="absolute"
                    top={4}
                    left={6}
                >-3% de juros: Melhor opção de parcelamento</NunitoTypography>

            </Box>
            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                paddingTop="15px"
                paddingLeft="15px"
            >5x R$6.300,00 <Checkbox />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$31.500,00</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                paddingTop="15px"
                paddingLeft="15px"
            >6x R$5.283,33 <Checkbox />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$31.699,98</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                paddingTop="15px"
                paddingLeft="15px"
            >7x R$4.542,85 <Checkbox />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$31.800,00</NunitoTypography>

        </Box >

    )
}

export default PixParcelado
