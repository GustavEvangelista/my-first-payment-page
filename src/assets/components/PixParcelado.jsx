/* eslint-disable react/prop-types */
import { Box, Divider } from '@mui/material';
import RectangleImg from '../img/Rectangle.png';
import CheckIcon from '@mui/icons-material/Check';
import { CustomRadio, NunitoTypography } from './PixStyledComponents';

const icon = (
    <span style={{ borderRadius: '50%', width: 16, height: 16, border: '2px solid #333' }} />
);
const checkedIcon = (
    <CheckIcon style={{ fill: '#fff', background: '#03D69D', borderRadius: '50%', width: 16, height: 16, border: '2px solid #03D69D' }} />
);

const options = [
    { id: '2x', label: '2x R$15.300,00', total: 'R$30.600,00' },
    { id: '3x', label: '3x R$10.196,66', total: 'R$30.620,00' },
    { id: '4x', label: '4x R$7.725,00', total: 'R$30.900,00' },
    { id: '5x', label: '5x R$6.300,00', total: 'R$31.500,00' },
    { id: '6x', label: '6x R$5.283,33', total: 'R$31.699,98' },
    { id: '7x', label: '7x R$4.542,85', total: 'R$31.800,00' },
];

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

            {options.map((option, index) => (
                <Box
                    key={option.id}
                    sx={{
                        background: selectedOption === option.id ? '#bce3d8' : 'none',
                        borderTopRightRadius: index === 0 ? '10px' : '0',
                        borderTopLeftRadius: index === 0 ? '10px' : '0',
                        borderBottomRightRadius: index === options.length - 1 ? '10px' : '0',
                        borderBottomLeftRadius: index === options.length - 1 ? '10px' : '0',
                    }}
                >
                    <Box
                        sx={{
                            justifyContent: 'space-between',
                            display: 'flex',
                            padding: '15px',
                            paddingBottom: '0',
                        }}
                    >
                        <NunitoTypography>{option.label}</NunitoTypography>

                        <CustomRadio
                            checked={selectedOption === option.id}
                            onClick={() => handleRadioClick(option.id)}
                            icon={icon}
                            checkedIcon={checkedIcon}
                        />
                    </Box>

                    <NunitoTypography paddingLeft={3} variant="caption">
                        Total: {option.total}
                    </NunitoTypography>

                    {index === 2 && (
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
                    )}

                    {index < options.length - 1 && (
                        <Divider
                            sx={{
                                border:
                                    selectedOption === option.id || selectedOption === options[index + 1]?.id
                                        ? '0.1px solid #03d69d'
                                        : '0.1px solid rgba(0, 0, 0, 0.12)',
                            }}
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default PixParcelado;
