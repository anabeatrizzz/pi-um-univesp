import user from "./user"
const endpoint = "/login/"

async function postLogin(){
  const response = await user.post(endpoint)
  return response.data
}


export {
  postLogin
}