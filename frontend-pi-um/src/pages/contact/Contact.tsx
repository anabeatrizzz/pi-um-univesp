import React from 'react';
import Grid from '@mui/material/Grid';
import WrapperPage from '../../components/wrapper-page';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import Button from '../../components/button';
import { colors } from '../../assets/variables';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import contactValidationSchema from '../../formik/validationSchemas/contact';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      cpf: '',
      email: '',
      telephone: '',
      message: ''
    },
    validationSchema: contactValidationSchema,
    onSubmit: () => { }
  })
  return (
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant="body1">
            Entre em contato conosco
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <TextField
              id="fullName"
              label="Nome completo"
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
          <Grid item xs={5}>
            <TextField
              id="telephone"
              label="Telefone"
              variant="outlined"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              error={formik.touched.telephone && Boolean(formik.errors.telephone)}
              helperText={formik.touched.telephone && formik.errors.telephone}
              placeholder="Telefone"
              type="tel"
              fullWidth
              inputProps={{ maxlength: 15 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography mb={1} variant="body1">
              Mensagem <b style={{ color: colors.red }}>*</b>
            </Typography>
            <TextField
              id="message"
              required
              variant="outlined"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              type="text"
              fullWidth
              multiline
              inputProps={{ maxlength: 200 }}
              minRows={10}
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
                <Button type="submit" text="enviar" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperPage>
  )
}