// Importa las action types acá

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload,
      };

    case "CREATE_PRODUCT":
      //mantenemos el state.products y le añadimos el nuevo producto q viene en nuestro payload.
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case "DELETE_PRODUCT":
      //buscamos el obj con id= "action.payload.id" para quitarlo de nuestro state y devolverlo.
      const index = state.products.findIndex(obj => obj.id === action.payload.id);
      state.products.splice(index, 1);
      return {
        ...state
      }


    default:
      return state;
  }
};

export default rootReducer;
