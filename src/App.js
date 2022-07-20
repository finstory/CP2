import React, { useEffect } from "react"
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct"
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, getAllProducts } from "./redux/actions";

function App() {

  //con el dispach, podemos ejecutar las acciones que cualquier parte de la app.
  const dipsatch = useDispatch();
  //con esto tenemos acceso a todos los store del reducer que eligamos.
  const prop = useSelector(store => store.products);

  useEffect(() => {
    dipsatch(createProduct({
      id: 6,
      name: 'Gorra Henry',
      description: 'Tapa todo menos los booms',
      price: 500,
      image: 'url',
      stock: 20,
    }));
    console.log(prop);
    dipsatch(createProduct({
      name: 45
    }));
    dipsatch(createProduct({
      name: "derer"
    }));
    dipsatch(deleteProduct(6));

    dipsatch(getAllProducts());
  }, [])
  
  return (
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/products/create" component={CreateProduct} />
    </div>
  )
}
export default App;
