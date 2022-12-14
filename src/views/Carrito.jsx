import ListadoCarrito from "../components/ListadoCarrito.jsx";
import { formatPrice } from "../components/utils/Utils.js";
import { useContext } from "react";
import Context from "../context/context.js";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart, cartTotal, removeFromCart } = useContext(Context);
  return (
    <div className="cart container">
      <h3>CARRO DE COMPRAS</h3>
      <h5>Aprovecha! envío gratis por compras sobre $150.000.</h5>

      {cartTotal() >= 150000 ? (
        <p className="oferta">Tu envío es gratis!</p>
      ) : (
        <p>
          Te faltan <span className="oferta">{formatPrice(150000 - cartTotal())} </span> para que tu envío sea gratis.
        </p>
      )}

      {cart.length !== 0 ? (
        <ListadoCarrito
          cart={cart}
          cartTotal={cartTotal}
          removeFromCart={removeFromCart}
        ></ListadoCarrito>
      ) : (
        <div className="noProducts">
          <p>No hay productos agregados </p>
          <Link to="/">
            Compra acá
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carrito;
