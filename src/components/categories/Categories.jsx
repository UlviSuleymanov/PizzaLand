import React from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const categories = ['Hamısı', 'Ətli', 'Vegetarian', 'Qril', 'Acılı', 'Bağlı'];

  let onClickCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li onClick={() => onClickCategory(i)} className={activeCategory === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
