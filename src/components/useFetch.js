import { useEffect, useState } from "react";
import axios from "axios";
const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserName();
  }, []);
  const getUserName = async () => {
    try {
      const response = await axios.get(url);
      const jsonData = response.data;
      console.log("jsonData", jsonData);
      setData(jsonData);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading };
};
export default UseFetch;
