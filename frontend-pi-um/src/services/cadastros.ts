import api from "./api"
const endpoint = "/cadastros/"

async function getCadastros(){
  const response = await api.get(endpoint)
  return response.data
}

async function postCadastro(newData: any){
  const response = await api.post(endpoint, newData)
  return response.data
}

export {
  getCadastros,
  postCadastro
}