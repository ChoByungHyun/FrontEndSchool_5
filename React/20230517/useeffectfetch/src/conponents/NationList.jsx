import { useState } from "react";
import React, { useEffect } from "react";

export default function NationList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/nations", { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
    console.log(data);
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}
