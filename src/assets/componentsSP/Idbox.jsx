import { Box } from "@mui/material";
import { NunitoTypography } from '../components/PixStyledComponents';

const Idbox = () => {
    // Função para gerar um código de 32 caracteres
    const generateRandomId = () => {
        // Cria uma string de 32 caracteres usando um loop
        return Array.from({ length: 32 }, () =>
            Math.floor(Math.random() * 16).toString(16) // Gera um número hexadecimal aleatório
        ).join(''); // Junta os caracteres em uma string única
    };

    // Chama a função para obter o código gerado
    const randomId = generateRandomId();

    return (

        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            margin={'10px'}
            marginBottom={'40px'}
        >
            <NunitoTypography fontSize={'12px'} color={'rgba(178, 178, 178, 1)'}>
                Identificador:
            </NunitoTypography>
            <NunitoTypography fontWeight={'bold'}>
                {randomId}
            </NunitoTypography>
        </Box>
    );
}

export default Idbox;
