import React from 'react'
import { NunitoTypography } from './Pix'
import { Box, Divider, Radio } from '@mui/material'
import RectangleImg from '../img/Rectangle.png'
import { CustomRadio } from './Pix'
import CheckIcon from '@mui/icons-material/Check';

const icon = <span style={{ borderRadius: '50%', width: 16, height: 16, border: '2px solid #333' }} />;
const checkedIcon = <CheckIcon style={{ fill: '#fff', background: '#03D69D', borderRadius: '50%', width: 16, height: 16, border: '2px solid #03D69D' }} />;


const PixParcelado = () => {
    return (
        <Box sx={{
            border: "1px solid #333",
            borderRadius: "10px",
            margin: "20px"
        }}
            position="relative"
            width="100%"
        >

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
                justifyContent: 'space-between',
            }}
                padding="15px"
                paddingBottom="0"
            >2x R$15.300,00 <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$30.600,00</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                padding="15px"
                paddingBottom="0"
            >3x R$10.196,66 <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$30.620,00</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                padding="15px"
                paddingBottom="0"
            >4x R$7.725,00 <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
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
                padding="15px"
                paddingBottom="0"
            >5x R$6.300,00 <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$31.500,00</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                padding="15px"
                paddingBottom="0"
            >6x R$5.283,33 <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$31.699,98</NunitoTypography>

            <Divider />

            <NunitoTypography sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
                padding="15px"
                paddingBottom="0"
            >7x R$4.542,85 <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </NunitoTypography>

            <NunitoTypography paddingLeft={3} variant='caption'>Total: R$31.800,00</NunitoTypography>

        </Box >

    )
}

export default PixParcelado
