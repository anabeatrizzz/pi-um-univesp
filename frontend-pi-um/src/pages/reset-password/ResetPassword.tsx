import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import WrapperPage from '../../components/wrapper-page';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '../../components/textfield';
import Button from '../../components/button';
import { useFormik } from 'formik';
import { card } from './ResetPassword.css';
import { Link } from 'react-router-dom';
import useStyles from './ResetPassword.css';
import resetPasswordValidationSchema from '../../formik/validationSchemas/resetPassword';
import { colors } from '../../assets/variables';

export default function ResetPassword() {
  const [submitted, setSubmitted] = useState(false);
  const styles = useStyles()
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmedPassword: ''
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: () => { setSubmitted(true) }
  })

  return (
    <WrapperPage>
      <Grid container>
        <Grid ml={16} item xs={12}>
          {
            !submitted ? (
              <Typography fontSize={24} variant="body1">
                Redefina a sua senha
              </Typography>
            ) : (
              <Typography fontSize={24} variant="body1">
                Redefinição de senha
              </Typography>
            )
          }

        </Grid>
      </Grid>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Card sx={card}>
          { !submitted && <form noValidate onSubmit={formik.handleSubmit}>
            <Grid pt={3} item xs={12}>
              <TextField
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                id="password"
                required
                label="Digite sua nova senha"
                type='password'
              />
            </Grid>
            <Grid pt={3} pb={3} item xs={12}>
              <TextField
                fullWidth
                value={formik.values.confirmedPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmedPassword && Boolean(formik.errors.confirmedPassword)}
                helperText={formik.touched.confirmedPassword && formik.errors.confirmedPassword}
                id="confirmedPassword"
                required
                label="Repita sua nova senha"
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
              <Button
                type="submit"
                text="Redefinir a senha"
              />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={12}
                color={colors.red}
              >
                * Campos obrigatórios
              </Typography>
            </Grid>
          </form>}
          {
            submitted && (
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item mt={15} xs={12}>
                  <Typography fontSize={24} color={colors.green}>
                    Nova senha criada com sucesso!
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Link className={styles.link} to='/login'>
                    <Typography
                      style={{ textDecoration: 'underline' }}
                      color={colors.grey}
                      fontSize={16}
                    >
                      Clique aqui para efetuar seu login
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            )
          }
        </Card>
      </Grid>
    </WrapperPage>
  )
}