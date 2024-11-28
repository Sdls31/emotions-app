import React, { useState } from 'react';

import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';

import { ImageInput } from './Screens/ImageInput';
import { PredictionInput } from './Screens/PredictionInput';
import TextInput from './Screens/TextInput';

export interface BackEndData {
  text: string | null;
  image: string | null;
  urlImage: string | null;
}

export const DataGrid = () => {
  const [typeCapture, setTypeCapture] = useState<string>('text');
  const [data, setData] = useState<BackEndData>({
    text: null,
    image: null,
    urlImage: null
  });

  const handleTypeCapture = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setTypeCapture(newAlignment);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}>
      <Box
        sx={{
          width: '50rem',
          backgroundColor: 'white',
          height: '35rem',
          borderRadius: '1rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <ToggleButtonGroup
            value={typeCapture}
            exclusive
            onChange={handleTypeCapture}>
            <ToggleButton value="text">
              <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
                Text
              </Typography>
            </ToggleButton>
            <ToggleButton value="image">
              <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
                Image
              </Typography>
            </ToggleButton>
            <ToggleButton value="prediction">
              <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
                Prediction
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          {typeCapture === 'text' && (
            <TextInput setData={setData} data={data} />
          )}
          {typeCapture === 'image' && (
            <ImageInput setData={setData} data={data} />
          )}
          {typeCapture === 'prediction' && <PredictionInput data={data} />}
        </Box>
      </Box>
    </Box>
  );
};
