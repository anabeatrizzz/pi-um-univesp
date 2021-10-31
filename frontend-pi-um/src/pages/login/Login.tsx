import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import useStyles, { card } from './Login.css';
import WrapperPage from '../../components/wrapper-page';
import { useFormik } from 'formik'
import loginValidationSchema from '../../formik/contactValidationSchema';

export default function Login() {
  const styles = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: () => { }
  })
  return (
    <WrapperPage>
      <Grid container>
        <Grid ml={16} item xs={12}>
          <Typography fontSize={24} variant="body1">
            Faça aqui o seu login!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Card sx={card}>
          <form onSubmit={formik.handleSubmit}>
            <Grid pt={3} pb={3} item xs={12}>
              <TextField
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                required
                label="E-mail"
                type='email'
              />
            </Grid>
            <Grid mb={2} item xs={12}>
              <TextField
                fullWidth
                required
                id="password"
                label="Senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                type='password'
              />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              mb={2}
            >
              <Button type="submit" text="Login" />
            </Grid>
          </form>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            mb={2}
          >
            <Grid item>
              <Link className={styles.link} to="#">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link className={styles.link} to="/signup">
                Cadastre-se!
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </WrapperPage>
  )
}
