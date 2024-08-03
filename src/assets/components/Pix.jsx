import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Radio } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import '@fontsource/nunito';
import RectangleImg from '../img/Rectangle.png';


export const NunitoTypography = styled(Typography)({
    fontFamily: 'Nunito',
});

export const CustomRadio = styled(Radio)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        fontSize: 15,
    },
    '&.Mui-checked': {
        color: theme.palette.primary.main,
    },
}));


const icon = <span style={{ borderRadius: '50%', width: 16, height: 16, border: '2px solid #333' }} />;
const checkedIcon = <CheckIcon style={{ fill: '#fff', background: '#03D69D', borderRadius: '50%', width: 16, height: 16, border: '2px solid #03D69D' }} />;

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
                paddingBottom: '0',
            }}>
                <NunitoTypography sx={{
                    fontFamily: 'nunito',
                    lineHeight: '2.5'
                }}>1x R$ 30.500,00</NunitoTypography>
                <CustomRadio
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                padding: '0  15px',
                lineHeight: '0.5px'
            }}>
                <NunitoTypography sx={{
                    lineHeight: '0.5'
                }}
                    color='#03D69D'
                    variant='caption'
                >Ganhe 3% de Cashback</NunitoTypography>

                <Box height="50px" width="100%" position="relative">
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
        </Box>
    );
}

export default Pix;
