import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WrapperPage from '../../components/wrapper-page';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return(
    <WrapperPage>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography>
            A página que você tentou acessar não existe
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/pi-um-univesp/frontend-pi-um">
            <Typography>Volte ao início</Typography>
          </Link>
        </Grid>
      </Grid>
    </WrapperPage>
  )
}