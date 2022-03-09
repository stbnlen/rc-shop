import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios(API);
      setProducts(resp.data);
    };
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
