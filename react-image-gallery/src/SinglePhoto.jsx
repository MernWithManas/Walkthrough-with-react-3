import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePhoto = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      const { photo } = await response.json();
      setData(photo);
    };

    getData();
  }, [id]);
  return (
    <div className="grid h-screen place-items-center">
      <div className="mx-10 w-8/12 justify-between flex  text-white border-2 border-white rounded-lg drop-shadow-2xl ">
        <img src={data.url} alt="" className="rounded-md w-[300px] h-[200px]" />
        <div className="px-10 py-3"> 
          <h2 className="text-3xl  font-bold ">{data.title}</h2><br />
          <span>{data.description}</span>
        </div>
      </div>
    </div>
  );
};
