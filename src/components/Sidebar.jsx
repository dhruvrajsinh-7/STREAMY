import { Stack } from '@mui/system'
import React from 'react'
import { categories } from "../utils/constants";
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack 
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "white",
          color: "silver",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "red" : "white", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;