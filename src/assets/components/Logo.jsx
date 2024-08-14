import WooviLogo from '/Logo.svg';
import { Box } from '@mui/material';

const Logo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '45px',
                width: '100%',
                position: 'relative',
                top: 0,
                zIndex: 1000,
            }}>
            <img src={WooviLogo} alt="WooviLogo" />
        </Box>
    )
}

export default Logo


