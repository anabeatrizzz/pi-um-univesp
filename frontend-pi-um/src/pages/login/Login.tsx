import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
//import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import  Button from '../../components/button';
//import Link from '@mui/material/Link';
import useStyles from './Login.css';
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
    <Box sx={{ height: 501}} >
      <Grid container direction='column' columns={6} justifyContent='center' alignItems='center' spacing={1} >
        <Box sx={{ width: 380, height:292 }}>
          <Card >
            <Grid container direction='column' columns={6} justifyContent='center' alignItems='center' spacing={6} > 
              <Grid item xs>
                <Box sx={{width: 310}}>  
                  <TextField fullWidth id="email" label="E-mail" type='email'/>
                </Box>
              </Grid>
              <Grid item xs mb={2}>
                <Box sx={{width: 310}}>
                  <TextField fullWidth id="senha" label="Senha" type='password'/>
                </Box>
              </Grid>
              <Grid container direction="column" justifyContent="center" alignItems="stretch" mb={2}>
                <Button type="submit" text="Login" />
              </Grid>
              <Grid container justifyContent="center" alignItems="center" direction="row" columns={2} mb={2} spacing={7}>
                <Grid item>
                  <Link className={styles.link} to="#">Esqueceu a senha?</Link>
                </Grid>
                <Grid item>
                  <Link className={styles.link} to="#">Cadastre-se!</Link>
                </Grid>
              </Grid>
            </Grid> 
        </Card>
       </Box>
      </Grid>
    </Box>
    </WrapperPage>
  )
}
