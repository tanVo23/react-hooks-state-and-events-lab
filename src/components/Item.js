import React, {useState} from "react";

function Item({ name, category }) {

const [addToCart, setAddToCart]= useState(false)
const cart = addToCart ? "in-cart" : ""
function handleClick(){
  setAddToCart(!addToCart)
}
 
  return ( 
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
