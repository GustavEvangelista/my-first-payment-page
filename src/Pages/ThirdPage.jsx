import { Box } from "@mui/material"
import Logo from "../assets/components/Logo"
import UserPrompt from "../assets/components/UserPrompt"
import PayButton from "../assets/components/TPcomponents.jsx/PayButton"
import PaymentTerm from "../assets/componentsSP/PaymentTerm"
import ValueBox from "../assets/componentsSP/ValueBox"
import Idbox from "../assets/componentsSP/Idbox"
import Footer from "../assets/components/Footer"
import { NunitoTypography } from "../assets/components/PixStyledComponents"
import CreditCardForm from "../assets/components/TPcomponents.jsx/CreditCardForm"

const ThirdPage = () => {
    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            margin: '5px',
            maxWidth: '275px',
            marginX: 'auto'
        }}>
            <Logo />
            <UserPrompt typography={NunitoTypography} question={"João, pague o restante em 1x no cartão"} />
            <CreditCardForm />
            < PayButton />
            < PaymentTerm />
            <ValueBox />
            <Idbox />
            <Footer />
        </Box>
    )

}

export default ThirdPage
