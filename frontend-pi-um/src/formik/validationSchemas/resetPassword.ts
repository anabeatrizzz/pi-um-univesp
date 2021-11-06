import * as Yup from 'yup';

const validationSchema = Yup.object({
  password: Yup
    .string()
    .min(6, ({ min }) => `Senhas devem ter no mínimo ${min} caracteres`)
    .required('Informe uma senha'),
  confirmedPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'As senhas não são iguais')
    .required('Informe a senha novamente'),
})

export default validationSchema