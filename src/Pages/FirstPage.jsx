
import { Box } from '@mui/material';
import Logo from '../assets/components/Logo';
import UserPrompt from '../assets/components/UserPrompt';
import Pix from '../assets/components/Pix';
import PixParcelado from '../assets/components/PixParcelado';
import Footer from '../assets/components/Footer';
import { useState } from 'react';


const FirstPage = () => {
    // Estado para controlar qual rádio está selecionado
    const [selectedOption, setSelectedOption] = useState('');

    // Função para alternar a seleção do rádio
    const handleRadioClick = (value) => {
        // Alterna o estado para o valor selecionado, desmarcando qualquer outra seleção
        setSelectedOption((prevValue) => (prevValue === value ? '' : value));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                margin: '5px',
                maxWidth: '375px',
                marginX: 'auto',
            }}
        >
            <Logo />
            <UserPrompt question="João, como você quer pagar?" />
            <Pix selectedOption={selectedOption} handleRadioClick={handleRadioClick} />
            <PixParcelado selectedOption={selectedOption} handleRadioClick={handleRadioClick} />
            <Footer />
        </Box>
    );
};

export default FirstPage;
