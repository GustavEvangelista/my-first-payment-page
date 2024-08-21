import { Box } from "@mui/material"
import { NunitoTypography } from "../components/PixStyledComponents"

const PaymentTerm = () => {
    return (
        <Box>
            <NunitoTypography style={{
                fontSize: '10px',
            }}>Prazo de pagamento: </NunitoTypography>
            <NunitoTypography style={{
                fontSize: '10px',
                fontWeight: 'bold'
            }}>15/12/2021 - 08:17</NunitoTypography>
        </Box>
    )
}

export default PaymentTerm
