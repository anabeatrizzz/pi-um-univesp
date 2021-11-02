import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup
    .string()
    .required('Informe seu nome'),
  cpf: Yup
    .string()
    .required('Informe seu CPF'),
  email: Yup
    .string()
    .email('Informe um e-mail válido')
    .required('Informe seu e-mail'),
  telephone: Yup
    .string(),
  message: Yup
    .string()
    .max(200)
    .required('Escreva sua mensagem')
})

export default validationSchema