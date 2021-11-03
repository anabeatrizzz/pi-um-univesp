import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WrapperPage from '../../components/wrapper-page';
import { useFormik } from 'formik';
import { card } from './PasswordForgotten.css';
import TextField from '../../components/textfield';
import Button from '../../components/button';
import * as Yup from 'yup';
import { colors } from '../../assets/variables';

export default function PasswordForgotten() {
  const [submitted, setSubmitted] = useState(false);
  const passwordForgottenValidationSchema = Yup.object({
    emailOrCPF: Yup
      .string()
      .required("Informe seu CPF ou e-mail")
  })
  const formik = useFormik({
    initialValues: {
      emailOrCPF: '',
    },
    validationSchema: passwordForgottenValidationSchema,
    onSubmit: (values) => {
      if(values.emailOrCPF.length === 14 || values.emailOrCPF.length === 11 ){
        // values.emailOrCPF is cpf
        setSubmitted(true)
      }
      else if(values.emailOrCPF.includes('@')) {
        // values.emailOrCPF is email
        setSubmitted(true)
      }
    }
  })

  return (
    <WrapperPage>
      <Grid container>
        <Grid ml={16} item xs={12}>
          <Typography fontSize={24} variant="body1">
            Esqueceu sua senha?
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
                disabled={submitted}
                value={formik.values.emailOrCPF}
                onChange={formik.handleChange}
                error={formik.touched.emailOrCPF && Boolean(formik.errors.emailOrCPF)}
                helperText={formik.touched.emailOrCPF && formik.errors.emailOrCPF}
                id="emailOrCPF"
                required
                label="Insira aqui seu CPF ou e-mail"
                type='text'
                inputProps={{ maxLength: 100 }}
              />
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              mb={2}
            >
              <Button type="submit" text="Recuperar senha" />
            </Grid>
          </form>
          {
            submitted && (
              <Grid item>
                <Typography
                  color={colors.greenishGrey}
                  align="center"
                  variant="body1"
                >
                  Verifique o email cadastrado para recuperar a sua senha
                </Typography>
              </Grid>
            )
          }
        </Card>
      </Grid>
    </WrapperPage>
  )
}