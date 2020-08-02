import React from "react";
import { GifGridItems } from "./GifGridItems";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='card-grid'>

        {
          images.map((img) => {
            return <GifGridItems
              key={img.id}
              {...img} />
          })
        }
      </div>
    </>
  );

};
