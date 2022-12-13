import { useContext } from "react";
import "../assets/styles/home.css";
import Context from "../context/context";
import { formatPrice } from "../components/utils/Utils.js"
import { useNavigate } from "react-router-dom";

const CasaPajaros = () => {
  const { casas } = useContext(Context);
  const navigate = useNavigate ()

  const createRoute = (route)=> {
    const lowerCase = route.toLowerCase()
    return lowerCase.replaceAll(" ","-")
}

  return (
    <main>
      <div className="galery">
        <div className="galeria grid-columns-4 p-3">
          {casas.map((casa) => {
            return (
              <div key={casa.id} className="card">
                <div id="cf">
                  <img className="bottom"src={casa.img1} alt={casa.name}/>
                  <img className="top" src={casa.img2} alt={casa.name} onClick={() => navigate(`/${casa.type}/${createRoute(casa.id)}`)} ></img>
                </div>
                <div className="card-detail">
                  <h4>{casa.name}</h4>
                  <p>${formatPrice(casa.price)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );

};

export default CasaPajaros;
