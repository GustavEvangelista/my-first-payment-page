/* eslint-disable react/prop-types */
import { Box } from '@mui/material'
import { NunitoTypography } from './PixStyledComponents'


const UserPrompt = ({ question }) => {
    return (
        <Box sx={{
            marginTop: '15px'
        }}>
            <NunitoTypography sx={{
                display: 'flex',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20px',
                width: '100%',
                textAlign: 'center',
            }}
            >
                {question}
            </NunitoTypography>
        </Box>
    )
}

export default UserPrompt
