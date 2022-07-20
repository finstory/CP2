import axios from 'axios';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export let idProduct = 5;

// Recuerden inicializar la variable de idProduct.

// Aca deben declarar las variables donde tengan el action types.
// Esten atentos a que los nombres de las variables coincidan.


// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

export const getAllProducts = () => {
  return async function (dispatch) {
    console.log("hehe");
    // Aca debes hacer la petición a la ruta del back http://localhost:3001/products

    return await fetch('http://localhost:3001/products')
      .then(resp => resp.json())
      .then(data => dispatch({ type: GET_ALL_PRODUCTS, payload: data })
      )

  };
};

export const getProductDetail = (id) => {

  return async (dispatch) => {

    try {

      const resp = await fetch(`http://localhost:3001/products/${id}`);

      if (resp.status === 200) {

        const data = await resp.json();

        dispatch({ type: GET_PRODUCT_DETAIL, payload: data });
      } else
      console.log("Algo fallo, quízas pusiste un id inexistente.")

    } catch (e) {
      console.log(e);
    }
  };
};

export const createProduct = (payload) => {
  ++idProduct;
  return { type: CREATE_PRODUCT, payload: { id: idProduct, ...payload } };

};

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, payload: id };

};

//todo. Simplemente invocar las peticiones que pide, y en las 2 últimas devolver los "action" correspondientes.