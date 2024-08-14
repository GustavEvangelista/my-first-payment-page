import { Box } from '@mui/system'
import FooterSafe from '../img/WooviSafe.png'
import { NunitoTypography } from './PixStyledComponents'


const Footer = () => {
    return (
        <Box typography={NunitoTypography}>
            <img src={FooterSafe} alt="Safe-Tag" width={'200px'} />
        </Box>
    )
}

export default Footer
