import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup
    .string()
    .required('Informe seu nome')
})

export default validationSchema