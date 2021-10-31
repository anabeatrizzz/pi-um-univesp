import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email()
    .required('Informe seu e-mail'),
  password: Yup
    .string()
    .required('Informe sua senha')
})

export default validationSchema