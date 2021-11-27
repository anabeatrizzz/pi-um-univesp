import axios from "axios";

const user = axios.create({
  baseURL: "http://127.0.0.1:8000/user"
})

export default user