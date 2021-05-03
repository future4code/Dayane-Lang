import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (urlEnd) => {
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(`${BASE_URL}${urlEnd}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlEnd]);

  return [data, getData];
};

export default useRequestData;
