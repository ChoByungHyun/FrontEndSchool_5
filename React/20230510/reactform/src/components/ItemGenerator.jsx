import React from "react";

const ItemGenerator = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <h2>
              {data.id}. {data.title}
            </h2>
            <p>{data.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemGenerator;
