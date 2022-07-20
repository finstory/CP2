import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions";

// FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.

const ProductCard = ({ id, image, name, price, stock }) => {

  const dispatch = useDispatch();

  const handleDeleteProduct = ()=>{
    dispatch(deleteProduct(id));
  }

  console.log([id, name, price, stock]);
  return (
    <div>
      <h3>
        <Link to={`/product/${id}`}>{name}</Link>
      </h3>
      <button onClick={handleDeleteProduct}>x</button>
      <img src={image} alt={name}></img>
      <p>Stock: {stock}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};

export default ProductCard;
