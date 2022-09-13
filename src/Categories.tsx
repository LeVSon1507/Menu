import React from 'react';

const Categories = ({ categories, filterItems }:any) => {
  return (
    <div className="btn-container">
      {categories.map((category:any, index:any) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
