import { Box, Container, Typography } from '@mui/material';

import InputGrid from 'components/InputGrid';

const Home: React.FC = () => {
  return (
    <Container>
      <Box sx={{ display: 'fixed', padding: '1.5rem 0' }}>
        <Typography fontSize={50} fontWeight={700} sx={{ color: 'white' }}>
          Feelings.io
        </Typography>
      </Box>
      <InputGrid />
    </Container>
  );
};

export default Home;
