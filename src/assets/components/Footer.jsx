import { Box } from '@mui/system'
import React from 'react'
import FooterSafe from '../img/WooviSafe.png'
import { NunitoTypography } from './Pix'

const Footer = () => {
    return (
        <Box typography={NunitoTypography}>
            <img src={FooterSafe} alt="Safe-Tag" width={'200px'} />
        </Box>
    )
}

export default Footer
