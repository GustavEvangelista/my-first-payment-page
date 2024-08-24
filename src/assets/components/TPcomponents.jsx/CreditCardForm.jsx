import { Box, TextField, Grid, MenuItem } from '@mui/material';

const CreditCardForm = () => {
    return (
        <Box component="form" sx={{ width: '100%' }} noValidate autoComplete="off">
            <TextField sx={{ borderRadius: '8px' }}
                fullWidth
                label="Nome Completo"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="CPF"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Número do Cartão"
                variant="outlined"
                margin="normal"
                required
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Vencimento"
                        variant="outlined"
                        margin="normal"
                        placeholder="MM/AA"
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="CVV"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                </Grid>
            </Grid>
            <TextField
                select
                fullWidth
                label="Quantidade de Parcelas"
                variant="outlined"
                margin="normal"
                defaultValue=""
                required
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}x
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};

export default CreditCardForm;
