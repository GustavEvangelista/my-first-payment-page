import React from 'react'
import { Box, Typography, Checkbox } from '@mui/material'
import '@fontsource/nunito'

const Pix = () => {
    return (

        <Box sx={{
            position: 'relative',
            border: '1px solid #000',
            width: '100%',
            height: '137px',
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
                    background: '#aeabab'
                }}

            >
                <Typography variant="body2" fontWeight="bold" fontFamily={'nunito'}>Pix</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px'
            }}>
                <Typography sx={{
                    fontFamily: 'nunito'
                }}>1x R$ 30.500,00</Typography> <Checkbox />


            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <Typography color='#03D69D' variant='caption' fontFamily={'nunito'}>Ganhe 3% de Cashback</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#133A6F',
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                    <Typography
                        color='#fff'
                        variant='caption'
                        fontFamily={'nunito'}
                    >🤑 R$ 300,00 de volta no seu Pix na hora</Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Pix
