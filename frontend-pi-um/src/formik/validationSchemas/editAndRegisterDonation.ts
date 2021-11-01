import * as Yup from 'yup';

const validationSchema = Yup.object({
  donationName: Yup
    .string()
    .required('Informe o que irá doar'),
  responsable: Yup
    .string()
    .required('Informe a pessoa responsável pela doação'),
  telephone: Yup
    .string()
    .required('Informe o telefone'),
  donationImg: Yup
    .string()
    .required('Informe uma imagem da doação'),
  donationCategory: Yup
    .string()
    .required('Escolha uma categoria de doação'),
  donationDescription: Yup
    .string()
    .required('Descreva sua doação'),
})

export default validationSchema