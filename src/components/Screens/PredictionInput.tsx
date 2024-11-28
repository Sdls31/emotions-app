import axios from 'axios';
import React, { useState } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import { BackEndData } from 'components/DataGrid';

interface Props {
  data: BackEndData;
}

export const PredictionInput: React.FC<Props> = ({ data }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [advice, setAdvice] = useState<string>('');
  const fetchData = async () => {
    setLoading(true);
    try {
      const apiData = { texto: data.text, imagen: data.image };
      console.log(apiData);
      const response = await axios.post(
        'http://127.0.0.1:5000/analizar',
        apiData
      );
      setAdvice(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            paddingLeft: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDirection: 'column',
            gap: 2,
            borderRight: '1px solid black;'
          }}>
          <Typography fontSize={32}>Datos para predecir</Typography>
          <Typography>
            Texto: {data.text ? data.text : 'Agrega una frase'}
          </Typography>
          <Typography>Imagen: </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '12.5rem', md: '17.5rem' },
              backgroundColor: 'white',
              height: '12.5rem',
              borderRadius: '0.5rem',
              maxHeight: '15rem',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
            }}>
            {data.urlImage ? (
              <img
                src={data.urlImage}
                style={{ width: '17.5rem', height: '12.5rem' }}
              />
            ) : (
              <Typography>Sube una imagen</Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button
              onClick={fetchData}
              variant="contained"
              sx={{
                backgroundColor: '#cedeff',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black'
                }
              }}>
              Pedir predicción
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            paddingLeft: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDirection: 'column',
            gap: 2
          }}>
          <Typography fontSize={32}>Consejos</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: { xs: '15rem', md: '20rem' },
              backgroundColor: 'white',
              height: '17.75rem',
              maxHeight: '17.75rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
            }}>
            {advice ? (
              <Typography
                sx={{
                  padding: '0.5rem',
                  width: '25rem',
                  wordWrap: 'break-word'
                }}>
                {advice}
              </Typography>
            ) : (
              <Typography
                sx={{
                  padding: '0.5rem',
                  width: '25rem',
                  wordWrap: 'break-word'
                }}>
                Es necesario subir una imagen y una frase
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
