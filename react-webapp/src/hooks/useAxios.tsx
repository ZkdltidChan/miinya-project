import { useState, useEffect } from "react";
import axios, { AxiosHeaders, Method, AxiosProgressEvent } from 'axios';


interface Response {
  // code: 
  data: any[] | any;
}

// type headers = {
//   ContentType?: "application/json"|"multipart/form-data"| "application/x-www-form-urlencoded",
//   Authorization?: string,
// };


const useAxios = () => {
  const [response, setResponse] = useState<Response>();
  const [uploadPercent, setUploadPercent] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const fetchData = async (method: Method, url: string, data?: any, headers?: {},) => {
    setIsLoading(true);
    const axiosConfig = {
      method: method,
      url: url,
      headers: headers,
      data: data,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        setUploadPercent(0);
        const loaded = progressEvent.loaded;
        const total = progressEvent.total || 0;
        const percentCompleted = Math.round((loaded * 100) / total);
        if (percentCompleted > 80) {
          setUploadPercent(80);
        } else {
          setUploadPercent(percentCompleted);
        }
      },
    };
    try {
      const result = await axios(axiosConfig);
      setResponse({ data: result.data });
    } catch (error) {
      console.log(error)
      setError('An error occurred while fetching the api.');
    }
    setUploadPercent(100)
    setIsLoading(false);
  };
  return { fetchData, response, isLoading, error, uploadPercent };
};

export default useAxios;
