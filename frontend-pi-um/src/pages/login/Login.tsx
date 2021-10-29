import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import useStyles, { card } from './Login.css';
import WrapperPage from '../../components/wrapper-page';

export default function Login(){
  const styles=useStyles()
 return(
  <WrapperPage>
    <Grid container item xs={12}>
      <Typography>
        <p>Faça aqui o seu login!</p>
      </Typography>
    </Grid>
    <Grid container direction='column' justifyContent='center' alignItems='center'>
      <Card sx={card}>
        <form>
          <Grid pt={3} pb={3} item xs={12}>
            <TextField fullWidth id="email" required label="E-mail" type='email'/>
          </Grid>
          <Grid mb={2} item xs={12}>
            <TextField fullWidth required id="senha" label="Senha" type='password'/>
          </Grid>
          <Grid container direction="column" justifyContent="center" alignItems="stretch" mb={2}>
            <Button type="submit" text="Login" />
          </Grid>
        </form>
        <Grid container justifyContent="space-between" alignItems="center" direction="row" mb={2}>
          <Grid item>
            <Link className={styles.link} to="#">Esqueceu a senha?</Link>
          </Grid>
          <Grid item>
            <Link className={styles.link} to="#">Cadastre-se!</Link>
          </Grid>
        </Grid>
      </Card>
    </Grid>
    </WrapperPage>
  )
}
