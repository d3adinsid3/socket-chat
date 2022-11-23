import axios, { AxiosError, AxiosResponse } from "axios";

const checkResponse = (response: AxiosResponse<any>) => response.data;
const catchError = (error: AxiosError) => error;

export const wrapper = async (
  method: "post" | "get",
  url: string,
  data?: any
) => {
  return await axios
    .request({ method, url, data })
    .then(checkResponse)
    .catch(catchError);
};
