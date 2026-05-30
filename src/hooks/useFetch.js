import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  let [products, setProducts] = useState([]);
  let [errorMsg, setErrorMsg] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        setErrorMsg("Something went wrong!");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    products,
    errorMsg,
    isLoading
  }
};
