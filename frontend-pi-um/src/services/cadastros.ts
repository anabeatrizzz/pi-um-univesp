import api from "./api"

async function getCadastros(){
  const response = await api.get("/cadastros")
  return response.data
}

export {
  getCadastros
}