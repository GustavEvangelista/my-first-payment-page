import { Box, Divider, FormControlLabel } from "@mui/material"
import { CustomRadio, NunitoTypography } from "../components/PixStyledComponents"

const ValueBox = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <FormControlLabel
                    control={<CustomRadio disabled />}
                    label="1° parcela no Pix"
                />
                <NunitoTypography fontSize={'12px'} fontWeight={'bold'}>R$15.300,00</NunitoTypography>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <FormControlLabel
                    control={<CustomRadio disabled />}
                    label="2° parcela no Cartão"
                />
                <NunitoTypography fontSize={'12px'} fontWeight={'bold'}>R$15.300,00</NunitoTypography>
            </Box>

            <Divider sx={{ marginBottom: '10px' }} />

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <NunitoTypography fontSize={'12px'}>CET: 0,5%</NunitoTypography>
                <NunitoTypography>R$ 30.600,00</NunitoTypography>
            </Box>

            <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <NunitoTypography fontSize={'12px'} fontWeight={'bold'}>Como funciona?</NunitoTypography>
                <NunitoTypography> ^ </NunitoTypography>
            </Box>

            <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />

        </Box>
    )
}

export default ValueBox
