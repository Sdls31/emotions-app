import React, { useState } from 'react';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, TextField, Typography, styled } from '@mui/material';

const InputGrid = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageBase64, setImageBase64] = useState<string>('');
  const [emotionText, setEmotionText] = useState<string>('');

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1
  });

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const files = event.target.files;
    if (files) {
      const imageString = URL.createObjectURL(files[0]);
      setImageUrl(imageString);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImageBase64(reader.result.toString());
        }
      };

      reader.onerror = () => {
        console.error('Error al leer el archivo.');
      };

      reader.readAsDataURL(files[0]);
    }
  };
  const sendDatatoBackEnd = () => {};

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        height: '70vh'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center'
        }}>
        <Box
          sx={{
            width: '20rem',
            backgroundColor: 'white',
            height: '15rem',
            borderRadius: '1rem'
          }}>
          {emotionText && (
            <Typography
              sx={{
                margin: '10px',
                maxWidth: '19rem',
                wordWrap: 'break-word'
              }}>
              {emotionText}
            </Typography>
          )}
        </Box>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          onChange={(e) => setEmotionText(e.target.value)}
          sx={{
            input: { color: 'black' },
            label: { color: 'white' },
            '.MuiFilledInput-root': {
              backgroundColor: '#333',
              '&:hover': {
                backgroundColor: '#444'
              },
              '&.Mui-focused': {
                backgroundColor: '#fff'
              }
            }
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center'
        }}>
        <Box
          sx={{
            width: '20rem',
            backgroundColor: 'white',
            height: '15rem',
            borderRadius: '1rem'
          }}>
          {imageUrl && (
            <img src={imageUrl} style={{ width: '20rem', height: '15rem' }} />
          )}
        </Box>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{ maxWidth: '12.5rem', alignSelf: 'center' }}>
          Upload files
          <VisuallyHiddenInput
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(event) => handleUploadImage(event)}
            multiple
          />
        </Button>
      </Box>
    </Box>
  );
};

export default InputGrid;
