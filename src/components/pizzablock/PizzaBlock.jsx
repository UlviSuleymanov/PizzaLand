import { useState } from 'react';
import React from 'react';

const PizzaBlock = (props) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [active, setActive] = useState(0);
  const onClickAddBtn = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const pizzaTypes = ['Nazik', 'Ənənəvi'];
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.image} alt="Pizza" />
      <h4 className="pizza-block__title">{props.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {props.types.map((type) => (
            <li
              key={type}
              onClick={() => setActive(type)}
              className={active === type ? 'active' : ''}
            >
              {pizzaTypes[type]}
            </li>
          ))}
          {/* <li className="active">nazik</li>
          <li>ənənəvi</li> */}
        </ul>
        <ul>
          {props.sizes.map((size, i) => (
            <li key={size} onClick={() => setActive(i)} className={active === i ? 'active' : ''}>
              {size} cm
            </li>
          ))}
          {/* <li className="active">26 cm.</li> */}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{props.price} ₼</div>
        <button onClick={onClickAddBtn} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            ></path>
          </svg>
          <span>Əlavə et</span>
          <i>{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
