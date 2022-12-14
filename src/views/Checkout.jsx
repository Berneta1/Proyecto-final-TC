import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <main className="checkout">
      <img
        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0f17e9c8fa9ca8050c3e4f2e5bfc4da3-1591607734/Black_background/create-loading-animation-for-your-business-needs.gif"
        alt=""
      />
      <p>Redireccionando a tu medio de pago...</p>
      <Link to="/carrito">
      <button className="btn-back">Volver</button>
      </Link>
    </main>
  );
};

export default Checkout;