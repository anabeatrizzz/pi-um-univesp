import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup
    .string()
    .required('Informe seu nome'),
  cpf: Yup
    .string()
    .required('Informe seu CPF'),
  address: Yup
    .string()
    .required('Informe seu endereço'),
  number: Yup
    .string()
    .required('Informe o número do seu endereço'),
  complement: Yup
    .string(),
  neighborhood: Yup
    .string()
    .required('Informe seu bairro'),
  city: Yup
    .string()
    .required('Informe sua cidade'),
  cep: Yup
    .string()
    .required('Informe seu CEP'),
  email: Yup
    .string()
    .email('Informe um e-mail válido')
    .required('Informe seu e-mail'),
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