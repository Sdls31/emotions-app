import React, { Dispatch, SetStateAction, useState } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';

import { BackEndData } from 'components/DataGrid';

interface Props {
  setData: Dispatch<SetStateAction<BackEndData>>;
  data: BackEndData;
}

const TextInput: React.FC<Props> = ({ setData, data }) => {
  const [emotionText, setEmotionText] = useState<string>('');

  const updateData = () => {
    setData({ ...data, text: emotionText });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2
      }}>
      <Typography fontSize={32} fontFamily={'ABeeZee'}>
        Add your phrase
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '25rem',
          backgroundColor: 'white',
          height: '5rem',
          borderRadius: '0.5rem',
          maxHeight: '5rem',
          overflowY: 'auto',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}>
        {emotionText ? (
          <Typography
            fontFamily={'ABeeZee'}
            sx={{
              padding: '0.5rem',
              width: '25rem',
              wordWrap: 'break-word'
            }}>
            {emotionText}
          </Typography>
        ) : (
          <Typography
            fontFamily={'ABeeZee'}
            sx={{
              padding: '0.5rem',
              width: '25rem',
              wordWrap: 'break-word'
            }}>
            Your phrase will appear here
          </Typography>
        )}
      </Box>
      <Box>
        <TextField
          sx={{ width: '25rem' }}
          id="outlined-multiline-static"
          label="Text to predict"
          multiline
          rows={5}
          onChange={(e) => setEmotionText(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        onClick={updateData}
        sx={{
          backgroundColor: '#cedeff',
          color: 'black',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black'
          }
        }}>
        <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
          Update text
        </Typography>
      </Button>
    </Box>
  );
};

export default TextInput;
