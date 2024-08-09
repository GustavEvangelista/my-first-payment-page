import React from 'react';
import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { CustomRadio, NunitoTypography } from './PixStyledComponents'; // Certifique-se de que o caminho está correto
import RectangleImg from '../img/Rectangle.png'; // Verifique se o caminho da imagem está correto

// Ícones personalizados
const icon = (
    <span style={{ borderRadius: '50%', width: 16, height: 16, border: '2px solid #333' }} />
);
const checkedIcon = (
    <CheckIcon style={{ fill: '#fff', background: '#03D69D', borderRadius: '50%', width: 16, height: 16, border: '2px solid #03D69D' }} />
);

const Pix = ({ selectedOption, handleRadioClick }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                border: selectedOption === 'pix' ? '1px solid #03d69d' : '1px solid #000',
                background: selectedOption === 'pix' ? '#bce3d8' : 'none',
                width: '100%',
                height: '125px',
                borderRadius: '10px',
                top: '10px',
            }}
        >
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
                <NunitoTypography variant="body2" fontWeight="bold">
                    Pix
                </NunitoTypography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '15px',
                    paddingBottom: '0',
                }}
            >
                <NunitoTypography sx={{ fontFamily: 'nunito', lineHeight: '2.5' }}>
                    1x R$ 30.500,00
                </NunitoTypography>
                <CustomRadio
                    checked={selectedOption === 'pix'}
                    onClick={() => handleRadioClick('pix')}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px',
                    padding: '0 15px',
                    lineHeight: '0.5px',
                }}
            >
                <NunitoTypography sx={{ lineHeight: '0.5' }} color="#03D69D" variant="caption">
                    Ganhe 3% de Cashback
                </NunitoTypography>

                <Box height="50px" width="100%" position="relative">
                    <img src={RectangleImg} alt="offer tag" width="100%" />
                    <NunitoTypography
                        color="#fff"
                        variant="caption"
                        position="absolute"
                        top={4}
                        left={6}
                    >
                        🤑 R$ 300,00 de volta no seu Pix na hora
                    </NunitoTypography>
                </Box>
            </Box>
        </Box>
    );
};

export default Pix;
