import React from 'react';
import { useEffect, useState } from "react";
const Tork = () => {
const [token, setToken] = useState([]);
useEffect(() => {
  fetch("https://examplebd.com/api/get-csrf-token")
    .then((res) => res.json())
    .then((data) => {
      setToken(data);
      console.log(data)
    })
    .catch((e) => console.log(e.message));
}, []);

    return (
        <div>
        <h2>Data parsed from given API:</h2>
        <h5>{token.csrf_token}</h5>
      </div>
    );
};

export default Tork;