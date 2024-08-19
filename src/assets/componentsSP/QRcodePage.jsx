/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material'
import QRcodeImg from '../img/QRcode.img.png'

const QRcodePage = () => {

    return (
        <Box
            margin={'10px'}
            flexDirection={'column'}
            display={'flex'}
        >
            <Box sx={{
                border: '2px solid #03D69D',
                borderRadius: '5px'
            }}>
                <img src={QRcodeImg} alt="WooviLogo" />

            </Box>

            <Button sx={{
                border: '1px solid #333'
            }} variant="Contained">Clique para copiar o QRcode</Button>

        </Box>
    )
}

export default QRcodePage


