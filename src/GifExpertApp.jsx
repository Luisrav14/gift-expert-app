import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Fortnite"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewValue={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
