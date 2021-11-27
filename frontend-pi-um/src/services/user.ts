import api from './api';
const endpoint = "user/user"

async function postUser(newData: any){
  const response = await api.post(`${endpoint}/register`, newData)
  return response.data
}

export {
  postUser
}