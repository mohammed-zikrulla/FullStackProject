import { axiosInstance } from "./index";

export const getAllMovies = async (values)=>{
   const response = await axiosInstance.get('api/movies/get-all-movies', values);
   return response;
} 