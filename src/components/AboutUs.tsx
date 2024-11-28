import React from 'react';

import { Container, Grid } from '@mui/material';

import { TeamCard } from './TeamCard';

export interface DataIntegrantes {
  image: string;
  name: string;
}

const integrates: DataIntegrantes[] = [
  {
    image: '/images/Barranco.png',
    name: 'Alfredo Barranco'
  },
  {
    image: '/images/Carrera.png',
    name: 'Miguel Carrera'
  },
  {
    image: '/images/DelosSantos.png',
    name: 'Sebas De los Santos'
  },
  {
    image: '/images/Montano.png',
    name: 'Victor Montaño'
  }
];

export const AboutUs = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}>
      <Grid container spacing={2}>
        {integrates.map((item) => (
          <Grid
            item
            xs={6}
            md={3}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <TeamCard image={item.image} name={item.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
