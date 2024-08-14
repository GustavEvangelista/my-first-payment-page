import { styled } from '@mui/material/styles';
import { Typography, Radio } from '@mui/material';
import '@fontsource/nunito';

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