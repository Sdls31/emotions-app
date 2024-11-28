import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import { BackEndData } from 'components/DataGrid';
import { Loader } from 'components/Loader/Loader';

interface Props {
  data: BackEndData;
}
interface Response {
  emocion_imagen: string;
  emocion_texto: string;
  recomendaciones: string;
}

export const PredictionInput: React.FC<Props> = ({ data }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formattedText, setFormattedText] = useState<string>('');
  const [advice, setAdvice] = useState<Response | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiData = { texto: data.text, imagen: data.image };
      const response = await axios.post(
        'http://127.0.0.1:5000/analizar',
        apiData
      );
      setAdvice(response.data);
    } catch (err) {
      console.error(err);
      setError('Error al obtener la predicción.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (advice?.recomendaciones) {
      setFormattedText(advice.recomendaciones.replace(/\\n/g, '\n'));
    }
  }, [advice]);

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
          <Typography fontSize={32} fontFamily={'ABeeZee'}>
            Data to predict
          </Typography>
          <Typography fontFamily={'ABeeZee'}>
            Text: {data.text ? data.text : 'Add a phrase'}
          </Typography>
          <Typography fontFamily={'ABeeZee'}>Image:</Typography>
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
                alt="Imagen subida"
                style={{ width: '17.5rem', height: '12.5rem' }}
              />
            ) : (
              <Typography fontFamily={'ABeeZee'}>Upload an Image</Typography>
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
              <Typography fontFamily={'ABeeZee'} textTransform={'none'}>
                Ask to Predict
              </Typography>
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
          <Typography fontSize={32} fontFamily={'ABeeZee'}>
            Advices
          </Typography>
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
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '17.75rem'
                }}>
                <Loader />
              </Box>
            ) : advice?.recomendaciones ? (
              <Typography
                fontFamily={'ABeeZee'}
                sx={{
                  padding: '0.5rem',
                  width: '25rem',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word'
                }}>
                {formattedText}
              </Typography>
            ) : (
              <Typography
                fontFamily={'ABeeZee'}
                sx={{
                  padding: '0.5rem',
                  width: '25rem',
                  wordWrap: 'break-word'
                }}>
                It is necessary to upload an image and a phrase
              </Typography>
            )}
          </Box>
          <Typography fontFamily={'ABeeZee'}>
            Text prediction: {advice?.emocion_texto}
          </Typography>
          <Typography fontFamily={'ABeeZee'}>
            Image prediction: {advice?.emocion_imagen}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
