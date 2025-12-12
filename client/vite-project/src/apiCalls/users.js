import { axiosInstance } from "."

export const RegisterUser = async (values)=>{
   const response = await axiosInstance.post('/api/users/register', values);
   return response;
}