import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Checkbox } from '@mui/material'
import '@fontsource/nunito'
import RectangleImg from '../img/Rectangle.png'

export const NunitoTypography = styled(Typography)({
    fontFamily: 'Nunito',
});

const Pix = () => {
    return (

        <Box sx={{
            position: 'relative',
            border: '1px solid #000',
            width: '100%',
            height: '125px',
            borderRadius: '10px',
            top: '10px'
        }}>
            <Box
                sx={{
                    position: 'absolute',
                    width: '40px',
                    top: '-11px',
                    left: '15px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'black',
                    background: '#aeabab',
                }}

            >
                <NunitoTypography variant="body2" fontWeight="bold">Pix</NunitoTypography>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px',
                paddingBottom: '0'
            }}>
                <NunitoTypography sx={{
                    fontFamily: 'nunito'
                }}>1x R$ 30.500,00</NunitoTypography> <Checkbox />


            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '0  15px'
            }}>
                <NunitoTypography
                    color='#03D69D'
                    variant='caption'
                >Ganhe 3% de Cashback</NunitoTypography>

                <Box width="100%" position="relative">
                    <img src={RectangleImg} alt="offer tag" width="100%" />

                    <NunitoTypography
                        color='#fff'
                        variant='caption'
                        position="absolute"
                        top={4}
                        left={6}
                    >🤑 R$ 300,00 de volta no seu Pix na hora</NunitoTypography>
                </Box>
            </Box>
        </Box >
    )
}

export default Pix
