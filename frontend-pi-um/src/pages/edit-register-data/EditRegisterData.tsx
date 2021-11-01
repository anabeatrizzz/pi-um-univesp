import React from 'react'
import TextField from '../../components/textfield'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import WrapperPage from '../../components/wrapper-page'
import Button from '../../components/button'
import signUpValidationSchema from '../../formik/validationSchemas/signUpAndEditRegisterData';
import { useFormik } from 'formik';

export default function EditRegisterData() {
  const formik = useFormik({
    initialValues: {
      fullName: 'Maria Cecília da Silva',
      cpf: '423.338.881-29',
      address: 'Avenida das Flores',
      number: '755',
      complement: 'Casa',
      neighborhood: 'Gaivota',
      city: 'Itanhaém',
      cep: '11740-000',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: () => { }
  })

  return (
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant="body1">
            Atualize aqui os seus dados cadastrais
          </Typography>
        </Grid>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <TextField
                id="fullName"
                label="Nome completo"
                variant="outlined"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
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
                value={formik.values.cpf}
                onChange={formik.handleChange}
                error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                helperText={formik.touched.cpf && formik.errors.cpf}
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
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
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
                variant="outlined"
                placeholder="Complemento"
                value={formik.values.complement}
                onChange={formik.handleChange}
                error={formik.touched.complement && Boolean(formik.errors.complement)}
                helperText={formik.touched.complement && formik.errors.complement}
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
                value={formik.values.neighborhood}
                onChange={formik.handleChange}
                error={formik.touched.neighborhood && Boolean(formik.errors.neighborhood)}
                helperText={formik.touched.neighborhood && formik.errors.neighborhood}
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
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
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
                value={formik.values.cep}
                onChange={formik.handleChange}
                error={formik.touched.cep && Boolean(formik.errors.cep)}
                helperText={formik.touched.cep && formik.errors.cep}
                fullWidth
                required
                inputProps={{ maxlength: 8 }}
              />
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
                <Button type="submit" text="Salvar" />
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </WrapperPage>
  )
}