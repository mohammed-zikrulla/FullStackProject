import { axiosInstance } from ".";

export const RegisterUser = async (values) => {
  const response = await axiosInstance.post("/api/users/register", values);
  return response;
};

export const loginUser = async (values) => {
  const response = await axiosInstance.post("/api/users/login", values);
  return response;
};

export const GetCurrentUser = async (values) => {
  const response = await axiosInstance.get("api/users/getValidUser", values);
  return response;
};
