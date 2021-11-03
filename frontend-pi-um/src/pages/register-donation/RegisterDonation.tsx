import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { colors } from '../../assets/variables';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import registerDonationValidationSchema from '../../formik/validationSchemas/editAndRegisterDonation';

export default function RegisterDonation(){
  const categories = ['Básico', 'Revestimento', 'Louças', 'Metais', 'Hidráulica', 'Elétrica', 'Pintura', 'Gesso', 'Vidro', 'Esquadrias', 'Portas e janelas']
  const [filePath, setFilePath] = useState();

  const formik = useFormik({
    initialValues: {
      donationName: '',
      responsable: '',
      telephone: '',
      donationImg: filePath,
      donationCategory: '',
      donationDescription: ''
    },
    validationSchema: registerDonationValidationSchema,
    onSubmit: () => { }
  })

  const { getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept: 'image/jpeg, image/png, image/jpg'
  });

  useEffect(() => {
    if(acceptedFiles[0] !== undefined){
      acceptedFiles.map((acceptedFile: any) => {
        setFilePath(acceptedFile.path)
        return null
      })
    }
  }, [acceptedFiles])

  return(
    <WrapperPage>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize={24} variant="body1">
            Cadastre aqui a sua doação
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="donationName"
              value={formik.values.donationName}
              onChange={formik.handleChange}
              error={formik.touched.donationName && Boolean(formik.errors.donationName)}
              helperText={formik.touched.donationName && formik.errors.donationName}
              label="Digite aqui o nome do item que vai doar"
              type="text"
              mb={true}
              required
            />
            <TextField
              fullWidth
              id="responsable"
              label="Quem é o responsável pela doação?"
              value={formik.values.responsable}
              onChange={formik.handleChange}
              error={formik.touched.responsable && Boolean(formik.errors.responsable)}
              helperText={formik.touched.responsable && formik.errors.responsable}
              type="text"
              mb={true}
              required
            />
            <TextField
              fullWidth
              id="telephone"
              label="Qual o telefone?"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              error={formik.touched.telephone && Boolean(formik.errors.telephone)}
              helperText={formik.touched.telephone && formik.errors.telephone}
              type="tel"
              mb={true}
              required
            />
            <Typography marginTop={2}>
              Insira aqui a foto do que você está doando:
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="text"
                  value={formik.values.donationImg}
                  error={formik.touched.donationImg && Boolean(formik.errors.donationImg)}
                  helperText={formik.touched.donationImg && formik.errors.donationImg}
                  label={formik.values.donationImg === undefined ? '[Caminho do arquivo]' : undefined}
                  disabled
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <input
                  {...getInputProps()}
                  id="donationImg"
                  onChange={formik.handleChange}
                />
                <Button onClick={open} text="Anexar arquivo" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <TextField
              select
              fullWidth
              onChange={(value) => formik.setFieldValue('donationCategory', value.target.value)}
              onBlur={() => formik.setFieldTouched('donationCategory', true)}
              value={formik.values.donationCategory}
              error={formik.touched.donationCategory && Boolean(formik.errors.donationCategory)}
              helperText={formik.touched.donationCategory && formik.errors.donationCategory}
              id="donationCategory"
              label="Qual a categoria da doação?"
              required
              mb={true}
            >
              {
                categories.map(category => (
                  <MenuItem key={category} value={category}>
                    { category }
                  </MenuItem>
                ))
              }
            </TextField>
            <Card sx={{ padding: 2 }}>
              <img
                width="100%"
                height="100%"
                src="https://place-hold.it/500x500.png"
                alt="imagem da doação"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
          <Typography>
              Descreva aqui a doação: <b style={{ color: colors.red }}>*</b>
            </Typography>
            <TextField
              fullWidth
              id="donationDescription"
              value={formik.values.donationDescription}
              error={formik.touched.donationDescription && Boolean(formik.errors.donationDescription)}
              helperText={formik.touched.donationDescription && formik.errors.donationDescription}
              type="text"
              multiline
              minRows={10}
              mb={true}
              required
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={2}
        >
          <Grid item xs={3}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Button
                bgColor={colors.lightGrey}
                text="cancelar"
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
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
      </form>
    </WrapperPage>
  )
}