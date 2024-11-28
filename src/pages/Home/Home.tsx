import { Box, Container, Typography } from '@mui/material';

import { DataGrid } from 'components/DataGrid';
import InputGrid from 'components/InputGrid';

const Home: React.FC = () => {
  return (
    <Container>
      <DataGrid />
    </Container>
  );
};

export default Home;
