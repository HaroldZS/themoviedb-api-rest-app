import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = async (url) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    params: {
      api_key: apiKey,
      // language: navigator.language || "es-ES",
    },
  });

  const example = await api(url);
  console.log(example);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api(url);
        console.log(result);
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export { useFetch };
