import React from 'react';

import { Box, Typography } from '@mui/material';

interface Props {
  image: string;
  name: string;
}

export const TeamCard: React.FC<Props> = ({ name, image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '12rem',
        backgroundColor: 'white',
        borderRadius: '1rem',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Box sx={{ padding: '1rem' }}>
        <img src={image} width={'150rem'} style={{ borderRadius: '1rem' }} />
      </Box>
      <Box sx={{ marginBottom: '1rem' }}>
        <Typography fontFamily={'ABeeZee'} fontWeight={600} align="center">
          {name}
        </Typography>
        <Typography fontFamily={'ABeeZee'} align="center">
          7th semester
        </Typography>
        <Typography fontFamily={'ABeeZee'} align="center">
          Computer systems engineering
        </Typography>
      </Box>
    </Box>
  );
};
