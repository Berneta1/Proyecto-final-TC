import { formatPrice } from "./utils/Utils.js";
import { Link } from "react-router-dom";

const ListadoCarrito = ({ cart, removeFromCart, cartTotal }) => {
  return (
    <div className="cart-view">
       <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <div className="product">
                <img src={item.img1} alt={item.name} />
                <h5>{item.name}</h5>
              </div>
              <div className="price">
                <span>${formatPrice(item.price * item.count)}</span>
                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item)}
                >
                  Quitar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">
        <h5>Total: ${formatPrice(cartTotal())}</h5>
        <Link to="/checkout">
          <button className="btn-pay">Pagar</button>
        </Link>
      </div>
    </div>
  );
};
export default ListadoCarrito;
