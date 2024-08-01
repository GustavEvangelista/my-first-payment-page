import { Box, Button } from '@mui/material'
import QRCode from 'qrcode.react'
import React from 'react'

const QRcodePage = ({ height, size = 200 }) => {


    return (
        <Box
            margin={'10px'}
            flexDirection={'column'}
            display={'flex'}
            alignContent={'center'}>
            <Box>
                <QRCode size={size} height={height} />
            </Box>
            <Button variant="Contained">Clique para copiar o QRcode</Button>
        </Box>
    )
}

export default QRcodePage


