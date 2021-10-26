import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';

export default function SignUp(){
  return(
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='body1'>
            Preencha seus dados e faça seu cadastro
          </Typography>
        </Grid>
        <form>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <TextField
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
                label="CPF"
                variant="outlined"
                placeholder="CPF"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label="Endereço (Rua / Av / Travessa)"
                variant="outlined"
                placeholder="Endereço (Rua / Av / Travessa)"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Número"
                variant="outlined"
                placeholder="Número"
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Complemento"
                variant="outlined"
                placeholder="Complemento"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Bairro"
                variant="outlined"
                placeholder="Bairro"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Cidade"
                variant="outlined"
                placeholder="Cidade"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="CEP"
                variant="outlined"
                placeholder="CEP"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid alignSelf="center" item xs={8}>
              <Typography variant="body1">
                * Campos obrigatórios
              </Typography>
            </Grid>
            <Grid mr={5} container direction="row" justifyContent="flex-end" alignContent="flex-end">
              <Grid item xs={1}>
                <Button type="submit" text="Cadastrar" />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </WrapperPage>
  )
}