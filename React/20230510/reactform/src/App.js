import React from "react";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";
import { useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);

  const addData = (data) => {
    setDatas([...datas, data]);
  };
  console.log(datas);
  return (
    <div>
      <ItemGenerator datas={datas} />
      <EventForm addData={addData} />
    </div>
  );
}
export default App;
