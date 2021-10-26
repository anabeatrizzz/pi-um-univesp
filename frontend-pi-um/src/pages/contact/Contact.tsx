import React from 'react';
import Grid from '@mui/material/Grid';
import WrapperPage from '../../components/wrapper-page';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1">
            Entre em contato conosco
          </Typography>
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <TextField
              id="nomeCompleto"
              label="Nome completo"
              variant="outlined"
              placeholder="Nome completo"
              type="text"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="cpf"
              label="CPF"
              variant="outlined"
              placeholder="CPF"
              type="text"
              fullWidth
              inputProps={{
                maxlength: 11
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="E-mail"
              type="text"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="telefone"
              label="Telefone"
              variant="outlined"
              placeholder="Telefone"
              type="text"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </WrapperPage>
  )
}