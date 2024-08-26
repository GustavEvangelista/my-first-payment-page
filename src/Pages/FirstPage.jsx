
import { Box } from '@mui/material';
import Logo from '../assets/components/Logo';
import UserPrompt from '../assets/components/UserPrompt';
import Pix from '../assets/components/Pix';
import PixParcelado from '../assets/components/PixParcelado';
import Footer from '../assets/components/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const FirstPage = () => {
    // Estado para controlar qual rádio está selecionado
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    // Função para alternar a seleção do rádio
    const handleRadioClick = (value) => {
        // Alterna o estado para o valor selecionado, desmarcando qualquer outra seleção
        setSelectedOption(value);
        setTimeout(() => {
            navigate('/PixPage');
        }, 2000)
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
