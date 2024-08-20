import { Box, Button } from '@mui/material'
import VectorImg from '../img/Vector.png'

const QRButton = () => {
    return (
        <Box>

            <Button sx={{
                border: '1px solid #333',
                fontSize: '8px',
                width: '200px'
            }} variant="contained">Clique para copiar o QR CODE< img src={VectorImg} alt='Vector'

                style={{
                    marginLeft: '8px',
                    width: '16px',
                    height: '16px',
                }}

                /> </Button>
        </Box>
    )
}

export default QRButton
