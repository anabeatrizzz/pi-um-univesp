import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '../../components/textfield';
import Typography from '@mui/material/Typography';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';
import useStyles from './SignUp.css';
import { useFormik } from 'formik';
import validationSchema from './validationSchema'

export default function SignUp(){
  const styles = useStyles();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      cpf: '',
      address: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      cep: '',
    },
    validationSchema,
    onSubmit: (values) => { alert(JSON.stringify(values, null, 2)) }
  })

  return(
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant='body1'>
            Preencha seus dados e faça seu cadastro
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
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
              <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                placeholder="CPF"
                type="text"
                fullWidth
                required
                inputProps={{ maxlength: 11 }}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="address"
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
                variant="outlined"
                placeholder="Número"
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="complement"
                label="Complemento"
                variant="outlined"
                placeholder="Complemento"
                type="text"
                fullWidth
                inputProps={{ maxlength: 20 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="neighborhood"
                label="Bairro"
                variant="outlined"
                placeholder="Bairro"
                type="text"
                fullWidth
                required
                inputProps={{ maxlength: 20 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="city"
                label="Cidade"
                variant="outlined"
                placeholder="Cidade"
                type="text"
                fullWidth
                required
                inputProps={{ maxlength: 30 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="cep"
                label="CEP"
                variant="outlined"
                placeholder="CEP"
                type="text"
                fullWidth
                required
                inputProps={{ maxlength: 8 }}
              />
            </Grid>
            <Grid alignSelf="center" item xs={8}>
              <Typography className={styles.typography} variant="body1">
                * Campos obrigatórios
              </Typography>
            </Grid>
            <Grid
              mr={5}
              container
              direction="row"
              justifyContent="flex-end"
              alignContent="flex-end"
            >
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