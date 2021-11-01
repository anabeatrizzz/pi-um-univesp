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
    .required('Informe seu CEP')
})

export default validationSchema