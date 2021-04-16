// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function useRequestData(url, initialState) {
   const [data, setData] = useState(initialState)

   useEffect(()=> {
       axios.get(url)
       .then((response) => {
           setData(response.data.trips)
       })
       .catch((error) => {
           console.log(error)
       })
   }, [url])

   return data
}