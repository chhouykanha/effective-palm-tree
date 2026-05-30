import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchOne = (id) => {
  let [product, setProduct] = useState([]);
  let [errorMsg, setErrorMsg] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        setErrorMsg("Something went wrong!");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return {
    product,
    errorMsg,
    isLoading
  }
};
