import { Box, Button } from '@mui/material'

const PayButton = () => {
    return (
        <Box>

            <Button sx={{
                border: '1px solid #333',
                fontSize: '8px',
                width: '200px'
            }} variant="contained">Pagar</Button>
        </Box>
    )
}

export default PayButton