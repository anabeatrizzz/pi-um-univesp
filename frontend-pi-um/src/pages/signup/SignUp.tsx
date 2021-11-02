import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '../../components/textfield';
import Typography from '@mui/material/Typography';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';
import useStyles from './SignUp.css';
import { useFormik } from 'formik';
import InputMask from "react-input-mask";
import signUpValidationSchema from '../../formik/validationSchemas/signUpAndEditRegisterData';

export default function SignUp() {
  const styles = useStyles();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      cpf: '',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      cep: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: () => { }
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
                inputProps={{ maxlength: 20 }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="neighborhood"
                label="Bairro"
                value={formik.values.neighborhood}
                onChange={formik.handleChange}
                error={formik.touched.neighborhood && Boolean(formik.errors.neighborhood)}
                helperText={formik.touched.neighborhood && formik.errors.neighborhood}
                variant="outlined"
                placeholder="Bairro"
                type="text"
                fullWidth
                required
                //value="Gaivota"
                //disabled
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
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                //value="Itanhaém"
                fullWidth
                required
                //disabled
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
                //value="11740-000"
                value={formik.values.cep}
                onChange={formik.handleChange}
                error={formik.touched.cep && Boolean(formik.errors.cep)}
                helperText={formik.touched.cep && formik.errors.cep}
                fullWidth
                required
                //disabled
                inputProps={{ maxlength: 9 }}
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
    </WrapperPage>
  )
}