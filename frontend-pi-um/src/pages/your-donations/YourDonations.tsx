import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import useStyles, { card } from './YourDonations.css';
import WrapperPage from '../../components/wrapper-page';
import { useFormik } from 'formik'
import { CardMedia, Box, CardContent } from '@mui/material';
//erro import loginValidationSchema from '../../formik/validationSchemas/YourDonations';

export default function YourDonations () {
  const styles = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
   // erro validationSchema: loginValidationSchema,
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
          <form noValidate onSubmit={formik.handleSubmit}>
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
            {
                  Array(6).fill(1).map((_, index) => {
                    const linkTo = `/donation/${index+1}`
                    return (
                      <Grid item xs={6}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                          <CardMedia
                            component="img"
                            sx={{ width: 190 }}
                            src="https://place-hold.it/500x500.png"
                          />
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                              <Typography
                                variant="h6"
                                gutterBottom
                              >
                                <b>20 sacos de cimento</b>
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                gutterBottom
                              >
                                20 sacos de cimento fechados, 2 sacos abertos, mas com ...
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                gutterBottom
                              >
                                12/04/2021 - 15:34
                              </Typography>
                              <Link className={styles.link} to={linkTo}>
                                <Typography
                                  variant="subtitle2"
                                  gutterBottom
                                  align="right"
                                >
                                  Ver +
                                </Typography>
                              </Link>
                            </CardContent>
                          </Box>
                        </Card>
                      </Grid>
                    )
                  })
                }
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
