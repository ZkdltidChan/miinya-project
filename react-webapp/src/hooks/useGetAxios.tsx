import { useState, useEffect } from "react";
import axios from 'axios';


interface Response {
  // code: 
  data: any[];
}

const useGetAxios = (api: string) => {
  const [response, setResponse] = useState<Response>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(api);
        const data = res.data;
        setResponse({ data: data });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error)
        setError("An error occurred while fetching the api.");
      }
    };
    fetchProducts();
  }, []);

  return { response, isLoading, error };
};

export default useGetAxios;
