import { useContext } from "react";
import "../assets/styles/home.css";
import Context from "../context/context";
import { formatPrice } from "../components/utils/Utils.js"
import { useNavigate } from "react-router-dom";

const Bordados = () => {
  const { bordados } = useContext(Context);
  const navigate = useNavigate ()

  const createRoute = (route)=> {
    const lowerCase = route.toLowerCase()
    return lowerCase.replaceAll(" ","-")
}

  return (
    <main>
      <div className="galery">
        <div className="galeria grid-columns-4 p-3">
          {bordados.map((bordado) => {
            return (
              <div key={bordado.id} className="card">
                <div id="cf">
                  <img className="bottom"src={bordado.img1} alt={bordado.name}/>
                  <img className="top" src={bordado.img2} alt={bordado.name} onClick={() => navigate(`/${bordado.type}/${createRoute(bordado.id)}`)}  ></img>
                </div>
                <div className="card-detail">
                  <h4>{bordado.name}</h4>
                  <p>${formatPrice(bordado.price)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Bordados;
