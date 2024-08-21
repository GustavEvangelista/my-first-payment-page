/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import QRcodeImg from '../img/QRcode.img.png'


const QRcodePage = () => {

    return (
        <Box
            marginTop={'15px'}
        >
            <Box sx={{
                border: '2px solid #03D69D',
                borderRadius: '5px',
                alignItems: 'center',
                width: '320px',
                height: '320px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img src={QRcodeImg} alt="QRCodeImg" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }} />

            </Box>

        </Box>
    )
}

export default QRcodePage


