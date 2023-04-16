import { useState, useEffect } from "react";
import axios from 'axios';


interface Example {
  data: string;
}

const useGetExample = () => {
  const [example, setExample] = useState<Example>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get( "/api/v1");
        const data = await response.data;
        setExample({data: data});
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error)
        setError("An error occurred while fetching the examplies.");
      }
    };
    fetchProducts();
  }, []);

  return { example, isLoading, error };
};

export default useGetExample;
