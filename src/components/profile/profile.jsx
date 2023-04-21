import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';


export const Profile = (props) => {
    const email = JSON.parse(localStorage.getItem('user'))
    const [username, setUsername] = useState('')
  
    fetch(`http://dove.task-manager-backend.c66.me/users/search?email=${email}`)
    .then(response => response.json())
    .then(data => {
      setUsername(data.name)
    })
    .catch(error => console.error(error))

    // Destructure Props
    const { name = username } = props;

    return (
        // container for profile
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            {/* Avatar from mui */}
            <Avatar
                sx={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px',
                }}
            >
                <Typography variant='h4' color='text.primary'>{`${name.substring(0,1)}`}</Typography>
            </Avatar>
            {/* Name using typography from mui */}
            <Typography variant='h6' color='text.primary'>{`Welcome, ${name}`}</Typography>
            {/* Welcome Message using typography from mui */}
            <Typography variant='body1' color='text.primary'>This is your personal task manager</Typography>
        </Box>
    )
}

// available in JS as well - interfaces only available in TS during development. 
// good to use in conjunction with interfaces so that you reduce runtime errors
Profile.propTypes = {
    name: PropTypes.string.isRequired,
};