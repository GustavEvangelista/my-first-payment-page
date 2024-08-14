/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'


const UserPrompt = ({ question }) => {
    return (
        <Box>
            <Typography sx={{
                display: 'flex',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20px',
                width: '100%',
            }}
            >
                {question}
            </Typography>
        </Box>
    )
}

export default UserPrompt
