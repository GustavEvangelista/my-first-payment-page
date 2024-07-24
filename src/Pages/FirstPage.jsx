import { Box } from "@mui/material";
import Logo from "../assets/components/Logo";
import UserPrompt from "../assets/components/UserPrompt";
import Pix from "../assets/components/Pix";

const FirstPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            margin: '5px'
        }}>
            <Logo />
            <UserPrompt question={"João, como você quer pagar?"} />
            <Pix />
        </Box>
    )
}

export default FirstPage
