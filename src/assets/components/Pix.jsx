import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography, Checkbox } from '@mui/material'
import '@fontsource/nunito'

const NunitoTypography = styled(Typography)({
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
                <NunitoTypography variant="body2" fontWeight="bold" fontFamily={'nunito'}>Pix</NunitoTypography>
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
                gap: '20px',
                padding: '0  15px'
            }}>
                <NunitoTypography
                    color='#03D69D'
                    variant='caption'
                    fontFamily={'nunito'}
                >Ganhe 3% de Cashback</NunitoTypography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#133A6F',
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                    <NunitoTypography
                        color='#fff'
                        variant='caption'
                        fontFamily={'nunito'}
                    >🤑 R$ 300,00 de volta no seu Pix na hora</NunitoTypography>
                </Box>
            </Box>
        </Box >
    )
}

export default Pix
