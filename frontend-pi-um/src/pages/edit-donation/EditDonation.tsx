import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '../../components/textfield';
import WrapperPage from '../../components/wrapper-page';
import Button from '../../components/button';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { useDropzone } from 'react-dropzone';
import { colors } from '../../assets/variables';
import { card } from './EditDonation.css';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import editDonationValidationSchema from '../../formik/validationSchemas/editAndRegisterDonation';

export default function EditDonation(){
  const categories = ['Básico', 'Revestimento', 'Louças', 'Metais', 'Hidráulica', 'Elétrica', 'Pintura', 'Gesso', 'Vidro', 'Esquadrias', 'Portas e janelas']
  const [filePath, setFilePath] = useState('Imagemx.jpg')
  const formik = useFormik({
    initialValues: {
      donationName: 'Telhas',
      responsable: 'Maria Edileuza',
      telephone: '(13) 99876-5432',
      donationImg: filePath,
      donationCategory: categories[0],
      donationDescription: '200 telhas de cerâmica em ótimo estado. Precisa retirar, não fazemos entrega.'
    },
    validationSchema: editDonationValidationSchema,
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
        <Grid mb={2} item xs={12}>
          <Typography fontSize={24} variant="body1">
            Editar a sua doação
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="donationName"
              label="Digite aqui o nome do item que vai doar"
              type="text"
              value={formik.values.donationName}
              onChange={formik.handleChange}
              error={formik.touched.donationName && Boolean(formik.errors.donationName)}
              helperText={formik.touched.donationName && formik.errors.donationName}
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
            <InputMask
               mask="(99) 9 9999-9999"
               id="telephone"
               value={formik.values.telephone}
               onChange={formik.handleChange}
            >
              {
                (inputProps: any) =>
                <TextField
                  fullWidth
                  id="telephone"
                  label="Qual o telefone?"
                  error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                  helperText={formik.touched.telephone && formik.errors.telephone}
                  type="tel"
                  mb={true}
                  required
                  {...inputProps}
                />
              }
            </InputMask>
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
                  label={formik.values.donationImg === undefined ? '[Caminho do arquivo]' : undefined}
                  value={formik.values.donationImg}
                  error={formik.touched.donationImg && Boolean(formik.errors.donationImg)}
                  helperText={formik.touched.donationImg && formik.errors.donationImg}
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
              value={formik.values.donationCategory}
              onChange={(value) => formik.setFieldValue('donationCategory', value.target.value)}
              onBlur={() => formik.setFieldTouched('donationCategory', true)}
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
            <Card sx={card}>
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
              Edite aqui a descrição: <b style={{ color: colors.red }}>*</b>
            </Typography>
            <TextField
              fullWidth
              id="donationDescription"
              type="text"
              value={formik.values.donationDescription}
              onChange={formik.handleChange}
              error={formik.touched.donationDescription && Boolean(formik.errors.donationDescription)}
              helperText={formik.touched.donationDescription && formik.errors.donationDescription}
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
              <Button type="submit" text="salvar" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </WrapperPage>
  )
}