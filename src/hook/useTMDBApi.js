import { useState, useEffect } from "react";

const useTMDBApi = (endpoint, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [maxPage, setMaxPage] = useState(1);

  const buildUrl = () => {
    let urlParams = "";
    if (params && Object.keys(params).length > 0) {
      urlParams = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join("&");
    }
    return `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&${urlParams}`;
  };

  const url = buildUrl();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setMaxPage(result.total_pages);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error, maxPage };
};

export { useTMDBApi };
