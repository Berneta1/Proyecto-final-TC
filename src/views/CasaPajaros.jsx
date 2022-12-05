import { useContext } from "react";
import "../assets/styles/home.css";
import Context from "../context/context";

const CasaPajaros = () => {
    const { casas } = useContext(Context);

    return (
      <main>
        <div className="galeria grid-columns-4 p-3">
          {casas.map((casa) => {
            return (
              <div key={casa.id} className="card">
                <div className="card-img">
                  <img src={casa.img1} alt={casa.name} />
                </div>
                <div className="card-detail">
                  <h4>${casa.name}</h4>
                  <p>${casa.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  
};

export default CasaPajaros;
