import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '../../components/textfield';
import Typography from '@mui/material/Typography';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';
import useStyles from './SignUp.css';
import { useFormik } from 'formik';
import InputMask from "react-input-mask";
import signUpValidationSchema from '../../formik/validationSchemas/signUpAndEditRegisterData';
import SnackBar from '../../components/snack-bar';
import { getCadastros, postCadastro } from '../../services/cadastros';

interface ISnackbarProps {
  open: boolean | undefined;
  msg?: string | undefined;
}

export default function SignUp() {
  const styles = useStyles();
  const [snackbarProps, setSnackbarProps] = useState<ISnackbarProps>()
  function handleCloseSnackBar() {
    setSnackbarProps({
      ...snackbarProps,
      open: false
    })
  }

  useEffect(() => {
    getCadastros()
      .then((response) => {
        //console.log(response)
      })
      .catch(err => console.log(err))
  }, [])

  const formInitialValues = {
    fullName: '',
    cpf: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: 'Gaivota',
    city: 'Itanhaém',
    cep: '11740-000',
  }

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: signUpValidationSchema,
    onSubmit: (values, actions) => {
      const signUpData = {
        bairro: values.neighborhood,
        cidade: values.city,
        complemento: values.complement,
        endereco: values.address,
        nome: values.fullName,
        numero: values.number,
        postal: values.cep
      }

      postCadastro(signUpData)
        .then(() => {
          setSnackbarProps({
            msg: "Cadastro realizado com sucesso!",
            open: true
          })
          actions.resetForm({
            values: formInitialValues
          })
        })
        .catch(err => {
          setSnackbarProps({
            msg: String(err),
            open: true
          })
        })
    }
  })

  return (
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant='body1'>
            Preencha seus dados e faça seu cadastro
          </Typography>
        </Grid>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <TextField
                id="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
                label="Nome completo"
                variant="outlined"
                placeholder="Nome completo"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={5}>
              <InputMask
                mask="999.999.999-99"
                id="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
              >
                {
                  (inputProps: any) => (
                    <TextField
                      label="CPF"
                      id="cpf"
                      error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                      helperText={formik.touched.cpf && formik.errors.cpf}
                      variant="outlined"
                      placeholder="CPF"
                      type="text"
                      fullWidth
                      required
                      {...inputProps}
                    />
                  )
                }
              </InputMask>
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
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
                id="number"
                label="Número"
                inputProps={{ pattern: "^[0-9]+$" }}
                value={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
                variant="outlined"
                placeholder="Número"
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="complement"
                label="Complemento"
                value={formik.values.complement}
                onChange={formik.handleChange}
                error={formik.touched.complement && Boolean(formik.errors.complement)}
                helperText={formik.touched.complement && formik.errors.complement}
                variant="outlined"
                placeholder="Complemento"
                type="text"
                fullWidth
                inputProps={{ maxLength: 20 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="neighborhood"
                label="Bairro"
                //value={formik.values.neighborhood}
                onChange={formik.handleChange}
                error={formik.touched.neighborhood && Boolean(formik.errors.neighborhood)}
                helperText={formik.touched.neighborhood && formik.errors.neighborhood}
                variant="outlined"
                placeholder="Bairro"
                type="text"
                fullWidth
                required
                value="Gaivota"
                disabled
                inputProps={{ maxLength: 20 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="city"
                label="Cidade"
                variant="outlined"
                placeholder="Cidade"
                type="text"
                //value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                value="Itanhaém"
                disabled
                fullWidth
                required
                inputProps={{ maxLength: 30 }}
              />
            </Grid>
            <Grid item xs={4}>
              <InputMask
                mask="99999-999"
                id="cep"
                //value={formik.values.cep}
                disabled
                value="11740-000"
                onChange={formik.handleChange}
              >
                {
                  (inputProps: any) => (
                    <TextField
                      id="cep"
                      label="CEP"
                      variant="outlined"
                      placeholder="CEP"
                      type="text"
                      disabled
                      error={formik.touched.cep && Boolean(formik.errors.cep)}
                      helperText={formik.touched.cep && formik.errors.cep}
                      fullWidth
                      required
                      {...inputProps}
                    />
                  )}
              </InputMask>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="email"
                label="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                placeholder="E-mail"
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                id="password"
                required
                label="Senha"
                type='password'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                value={formik.values.confirmedPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmedPassword && Boolean(formik.errors.confirmedPassword)}
                helperText={formik.touched.confirmedPassword && formik.errors.confirmedPassword}
                id="confirmedPassword"
                required
                label="Repita a Senha"
                type='password'
              />
            </Grid>
            <Grid alignSelf="center" item xs={8}>
              <Typography className={styles.typography} variant="body1">
                * Campos obrigatórios
              </Typography>
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
                  <Button type="submit" text="Cadastrar" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <SnackBar
        msg={snackbarProps?.msg}
        onClose={handleCloseSnackBar}
        open={snackbarProps?.open}
      />
    </WrapperPage>
  )
}