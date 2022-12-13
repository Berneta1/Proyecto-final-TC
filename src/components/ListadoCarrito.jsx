import { formatPrice } from "./utils/Utils.js";

const ListadoCarrito = ({ cart }) => {
  return (
    <div>
      <ul>
        {cart.map((product) => {
          return (
            <li key={product.id}>
              <div className="productCart">
                <img src={product.img1} alt={product.name}></img>
                <h4>{product.name}</h4>
              </div>
              <div className="price">
                <h4>${formatPrice(product.price)}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ListadoCarrito;
