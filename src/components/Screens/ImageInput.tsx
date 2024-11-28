import React, { Dispatch, SetStateAction, useState } from 'react';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, TextField, Typography, styled } from '@mui/material';

import { BackEndData } from 'components/DataGrid';

interface Props {
  setData: Dispatch<SetStateAction<BackEndData>>;
  data: BackEndData;
}

export const ImageInput: React.FC<Props> = ({ setData, data }) => {
  const [emotionImage, setEmotionImage] = useState<string>('');
  const [imageBase64, setImageBase64] = useState<string>('');

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

  const handleUpdateObject = () => {
    setData({ ...data, image: imageBase64, urlImage: emotionImage });
  };

  const updateData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageString = URL.createObjectURL(files[0]);
      setEmotionImage(imageString);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          const base64String = reader.result.toString();

          const [header, data] = base64String.split(',');
          setImageBase64(data);
        }
      };

      reader.onerror = () => {
        console.error('Error al leer el archivo.');
      };

      reader.readAsDataURL(files[0]);
    }
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
        Add an Image
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '25rem',
          backgroundColor: 'white',
          height: '15rem',
          borderRadius: '0.5rem',
          maxHeight: '15rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}>
        {emotionImage ? (
          <img src={emotionImage} style={{ width: '25rem', height: '15rem' }} />
        ) : (
          <Typography
            fontFamily={'ABeeZee'}
            sx={{
              padding: '0.5rem',
              width: '25rem',
              wordWrap: 'break-word'
            }}>
            Your image will appear here
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '25rem'
        }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{
            maxWidth: '12.5rem',
            alignSelf: 'center',
            backgroundColor: '#cedeff',
            color: 'black',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black'
            }
          }}>
          <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
            Upload Files
          </Typography>
          <VisuallyHiddenInput
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(event) => updateData(event)}
            multiple
          />
        </Button>
        <Button
          variant="contained"
          onClick={handleUpdateObject}
          sx={{
            backgroundColor: '#cedeff',
            color: 'black',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black'
            }
          }}>
          <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
            Update image
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
