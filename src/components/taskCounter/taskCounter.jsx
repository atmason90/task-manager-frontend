import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { emitCorrectBorderColors } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';

export const TaskCounter = (props) => {
    // Destructure props
    const { status = 'completed', count = 0 } = props
    
    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'    
            >
                <Avatar
                    sx={{
                        backgroundColor: 'transparent',
                        border: '5px solid',
                        width: '96px',
                        height: '96px',
                        marginBottom: '16px',
                        borderColor: `${emitCorrectBorderColors(status)}`,
                    }}
                >
                    <Typography color='#ffffff' variant='h4'>
                        {count}
                    </Typography>
                </Avatar>
                <Typography
                    color='#ffffff'
                    fontWeight='bold'
                    fontSize='20px'
                    variant='h5'
                >
                    {emitCorrectLabel(status)}
                </Typography>
            </Box>
        </>
    )
}


TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([
        'todo', 
        'inProgress', 
        'completed',
    ]),
};