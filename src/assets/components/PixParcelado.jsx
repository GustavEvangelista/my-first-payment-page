/* eslint-disable react/prop-types */
import { Box, Divider } from '@mui/material';
import RectangleImg from '../img/Rectangle.png';
import CheckIcon from '@mui/icons-material/Check';
import { CustomRadio, NunitoTypography } from './PixStyledComponents';


const icon = <span style={{ borderRadius: '50%', width: 16, height: 16, border: '2px solid #333' }} />;
const checkedIcon = <CheckIcon style={{ fill: '#fff', background: '#03D69D', borderRadius: '50%', width: 16, height: 16, border: '2px solid #03D69D' }} />;

const PixParcelado = ({ selectedOption, handleRadioClick }) => {


    return (
        <Box
            sx={{
                border: selectedOption ? '1px solid #03d69d' : '1px solid #000',
                borderRadius: '10px',
                margin: '20px',
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
                <NunitoTypography variant="body2" fontWeight="bold">
                    Pix Parcelado
                </NunitoTypography>
            </Box>

            <Box sx={{ background: selectedOption === '2x' ? '#bce3d8' : 'none', }}>


                <Box sx={{
                    borderTopRightRadius: '10px',
                    borderTopLeftRadius: '10px',
                    justifyContent: 'space-between',
                    display: 'flex',
                    padding: '15px',
                    paddingBottom: '0'
                }}>

                    <NunitoTypography>2x R$15.300,00</NunitoTypography>

                    <CustomRadio
                        checked={selectedOption === '2x'}
                        onClick={() => handleRadioClick('2x')}
                        icon={icon}
                        checkedIcon={checkedIcon}
                    />

                </Box>

                <NunitoTypography paddingLeft={3} variant="caption">
                    Total: R$30.600,00
                </NunitoTypography>


                <Divider sx={{ border: selectedOption ? '0.1px solid #03d69d' : '0.1px solid rgba(0, 0, 0, 0.12)' }} />

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '15px', paddingBottom: '0' }}>
                <NunitoTypography>3x R$10.196,66</NunitoTypography>
                <CustomRadio
                    checked={selectedOption === '3x'}
                    onClick={() => handleRadioClick('3x')}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>
            <NunitoTypography paddingLeft={3} variant="caption">
                Total: R$30.620,00
            </NunitoTypography>

            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '15px', paddingBottom: '0' }}>
                <NunitoTypography>4x R$7.725,00</NunitoTypography>
                <CustomRadio
                    checked={selectedOption === '4x'}
                    onClick={() => handleRadioClick('4x')}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>
            <NunitoTypography paddingLeft={3} variant="caption">
                Total: R$30.900,00
            </NunitoTypography>

            <Box
                sx={{
                    position: 'relative',
                    padding: '0 15px',
                    gap: '10px',
                }}
            >
                <img src={RectangleImg} alt="offer tag" width="100%" />

                <NunitoTypography
                    paddingLeft="25px"
                    color="#fff"
                    variant="caption"
                    position="absolute"
                    top={4}
                    left={6}
                >
                    -3% de juros: Melhor opção de parcelamento
                </NunitoTypography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '15px', paddingBottom: '0' }}>
                <NunitoTypography>5x R$6.300,00</NunitoTypography>
                <CustomRadio
                    checked={selectedOption === '5x'}
                    onClick={() => handleRadioClick('5x')}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>
            <NunitoTypography paddingLeft={3} variant="caption">
                Total: R$31.500,00
            </NunitoTypography>

            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '15px', paddingBottom: '0' }}>
                <NunitoTypography>6x R$5.283,33</NunitoTypography>
                <CustomRadio
                    checked={selectedOption === '6x'}
                    onClick={() => handleRadioClick('6x')}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>
            <NunitoTypography paddingLeft={3} variant="caption">
                Total: R$31.699,98
            </NunitoTypography>

            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '15px', paddingBottom: '0' }}>
                <NunitoTypography>7x R$4.542,85</NunitoTypography>
                <CustomRadio
                    checked={selectedOption === '7x'}
                    onClick={() => handleRadioClick('7x')}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </Box>
            <NunitoTypography paddingLeft={3} variant="caption">
                Total: R$31.800,00
            </NunitoTypography>
        </Box>
    );
};

export default PixParcelado;
