import React from 'react';
import Grid from '@mui/material/Grid';
import WrapperPage from '../../components/wrapper-page';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import Button from '../../components/button';
import { colors } from '../../assets/variables';

export default function Contact() {
  return (
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant="body1">
            Entre em contato conosco
          </Typography>
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <TextField
              id="fullName"
              label="Nome completo"
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
              inputProps={{ maxlength: 11 }}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="E-mail"
              type="email"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="telephone"
              label="Telefone"
              variant="outlined"
              placeholder="Telefone"
              type="tel"
              fullWidth
              inputProps={{ maxlength: 15 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography mb={1} variant="body1">
              Mensagem <b style={{ color: colors.red }}>*</b>
            </Typography>
            <TextField
              id="message"
              required
              variant="outlined"
              type="text"
              fullWidth
              multiline
              inputProps={{ maxlength: 200 }}
              minRows={10}
            />
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={2}
          >
            <Grid item mt={2} xs={3}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
              >
                <Button type="submit" text="enviar" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperPage>
  )
}