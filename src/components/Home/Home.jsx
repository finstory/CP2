import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import img_cp2 from "../../img-cp2/main-image-cp2.jpg";
import { getAllProducts } from "../../redux/actions";
import ProductCard from "../ProductCard/ProductCard";
// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {

  constructor(props) {
    //con esto te aseguras exista una prop. products para evitar errores.
    super(props);
    this.state = {
      products: props.products,
    };
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const { products } = this.props;
    // console.log(products);
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src={img_cp2} alt="main-img" />
        <h3>Products</h3>
        {
          //si podructs está vació, no se ejecutara nuestro .map.
          products ? (
            products.map((product) => (
              <div key={product.id}>
                <p>{product.id}</p>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    );
  }
}


export const mapStateToProps = (state) => {
  return {
    //todo: Ojo que si no usamos un "combineReducers", directamente debemos acceder sin nombrar nuestro reducer. O sea = "state.amount".
    products: state.products,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
