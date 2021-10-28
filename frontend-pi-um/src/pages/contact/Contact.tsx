import React from 'react';
import Grid from '@mui/material/Grid';
import WrapperPage from '../../components/wrapper-page';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useStyles from './Contact.css';
import Button from '../../components/button';

export default function Contact() {
  const styles = useStyles();

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
              placeholder="Nome completo"
              type="text"
              fullWidth
              required
              className={styles.textField}
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
              className={styles.textField}
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
              className={styles.textField}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="telefone"
              label="Telefone"
              variant="outlined"
              placeholder="Telefone"
              type="tel"
              fullWidth
              className={styles.textField}
              inputProps={{ maxlength: 15 }}
            />
          </Grid>
            
          <Grid item xs={12}>
            <Typography mb={0} variant="body1">
              Mensagem
            </Typography>
            <TextField
              id="message"
              variant="outlined"
              type="text"
              fullWidth
              multiline
              className={styles.textField}
              inputProps={{ maxlength: 200 }}
              minRows={10}
            />
          </Grid>

          <Grid
            mt={2}
            container
            direction="row"
            justifyContent="flex-end"
            alignContent="flex-end"
          >
              <Grid item xs={1}>
                <Button type="submit" text="enviar" />
              </Grid>
            </Grid>
        </Grid>
      </form>
    </WrapperPage>
  )
}