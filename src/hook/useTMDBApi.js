import { useState, useEffect } from "react";

const useTMDBApi = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isEmptyParams =
    Object.keys(params).length === 0 && params.constructor === Object;
  let urlParams = "";

  if (!isEmptyParams) {
    for (let key in params) {
      urlParams = `${urlParams}&${key}=${params[key]}`;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}${urlParams}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, loading, error };
};

export { useTMDBApi };
