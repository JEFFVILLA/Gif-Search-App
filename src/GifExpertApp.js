import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory.jsx";
import { GiftGrid } from "./components/GiftGrid.js";
const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(["One Punch"]);
  return (
    <div>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
