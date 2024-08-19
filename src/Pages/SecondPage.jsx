import { Box } from '@mui/material'
import UserPrompt from "../assets/components/UserPrompt";
import Logo from "../assets/components/Logo";
import QRcodePage from '../assets/componentsSP/QRcodePage';
import { NunitoTypography } from '../assets/components/PixStyledComponents';
import Footer from '../assets/components/Footer';

const SecondPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            margin: '5px',
            maxWidth: '375px',
            marginX: 'auto',
        }}>
            <Logo />
            <UserPrompt typography={NunitoTypography} question={"João, pague a entrada de R$ 15.300,00 pelo Pix"} />
            <QRcodePage />
            <Footer />
        </Box>
    )
}

export default SecondPage
