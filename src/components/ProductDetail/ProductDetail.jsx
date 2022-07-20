import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetail } from "../../redux/actions";
import "./productDetail.css";
// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).

const ProductDetail = (props) => {

  const {
    match: {
      params: { id },
    },
  } = props;
  
  const productDetail = useSelector((store) => store.productDetail);
  const { name, price, description, stock, image } = productDetail;
  console.log(productDetail);
  const dispatch = useDispatch();

  //todo: No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' , Si no lo hacen asi los test no van a correr.

  React.useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  return (
    <div>
      {/* con esto ya funca!! */}
      {/* <p>{name}</p>
    <p>{price}</p>
    <p>{description}</p>
    <p>{stock}</p> */}

      <div class="card">
        <div class="card__header">
          <img src={image} alt="card__image" class="card__image" width="600" />
        </div>
        <div class="card__body">
          <h3>
            {name} <span style={{ color: "blue" }}>x {stock}</span>{" "}
          </h3>
          <br />
          <p>{description}</p>
          <strong style={{ color: "green" }}> Precio: ${price}.000 us</strong>
        </div>
        <div class="card__footer">
          <div class="user">
            <button
              style={{ border: "none"}}
              onClick={() => {
                window.location.href =
                  "https://i.postimg.cc/029DQKM6/portada-Pombero.png";
              }}
            >
              <img
                src="https://i.postimg.cc/3NvSh7D8/miniin.png"
                alt="user__image"
                class="user__image"
              />
            </button>
            <div class="user__info">
              <h5>Shop The Pomberito</h5>
              <p>
                <small>@Facu_Neutral</small>
              </p>
              <small>Más barato imposible</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
