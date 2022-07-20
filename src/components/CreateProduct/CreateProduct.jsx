import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions";

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateProduct = () => {
  // name: '',
  // price: 0,
  // description: '',
  // stock: 0,

  const initialState = { name: "", price: 0, description: "", stock: 0 };

  const [values, setValues] = React.useState(initialState);

  const { name, price, description, stock } = values || initialState;
  
  const dispatch = useDispatch();

  //recibimos el el e.target, y automaticamente guardamos el "name" de los input asociado a su valor. Esto sucede cada vez que se realiza un cambio. 
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    //con esto se evita recargar la pagina al hacer el submit.
    e.preventDefault();
    dispatch(createProduct( values ));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          id="GET-name"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <label>Price: </label>
        <input
          id="GET-name"
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <label>Description: </label>
        <textarea
          name="description"
          rows="10"
          cols="50"
          value={description}
          onChange={handleInputChange}
        >
          Write something here
        </textarea>
        <label>Stock: </label>
        <input
          id="GET-name"
          type="number"
          name="stock"
          value={stock}
          onChange={handleInputChange}
        />

        <button type="submit">Create Product</button>
      </form>
    </>
  );
};

export default CreateProduct;

// {
//    <form action="">
//    <label>Name: </label>
//    <input id="GET-name" type="text" name="name" />
//    <label>Price: </label>
//    <input id="GET-name" type="number" name="price" />
//    <label>Description: </label>
//    <textarea name="description" rows="10" cols="50">
//      Write something here
//    </textarea>
//    <label>Stock: </label>
//    <input id="GET-name" type="number" name="stock" />

//    <button type="submit" onSubmit={() => {}}>
//      Create Product
//    </button>
//  </form>
// }
