import { Box, Typography } from '@mui/material'
import React from 'react'

const UserPrompt = ({ question }) => {
    return (
        <Box>
            <Typography sx={{
                display: 'flex',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                width: '325px',
                height: '33px',
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
