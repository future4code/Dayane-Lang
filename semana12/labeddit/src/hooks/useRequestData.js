import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useRequestData = (initialData, urlEnd) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${urlEnd}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ihh deu ruim.Tente novamente");
      });
  }, [urlEnd]);

  return data;
};

export default useRequestData;
