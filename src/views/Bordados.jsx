import { useContext } from "react";
import "../assets/styles/home.css";
import Context from "../context/context";

const Bordados = () => {
  const { bordados } = useContext(Context);

  return (
    <main>
      <div className="galeria grid-columns-4 p-3">
        {bordados.map((bordado) => {
          return (
            <div key={bordado.id} className="card">
              <div className="card-img">
                <img src={bordado.imgzoom} alt={bordado.name} />
              </div>
              <div className="card-detail">
                <h4>${bordado.name}</h4>
                <p>${bordado.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Bordados;
