// Categories.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, underConstruction } from '../redux/categorySlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories.list);
  const isUnderConstruction = useSelector((state) => state.categories.underConstruction);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      {isUnderConstruction && <p>Under Construction</p>}
      <button onClick={() => dispatch(addCategory({ id: 1, name: 'Fiction' }))}>
        Add Category
      </button>
      <button onClick={() => dispatch(underConstruction())}>Under Construction</button>
    </div>
  );
};

export default Categories;
