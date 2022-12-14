import { useContext } from "react";
import "../assets/styles/home.css";
import Context from "../context/context.js";
import { formatPrice } from "../components/utils/Utils.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CasaPajaros = () => {
  const { casas } = useContext(Context);
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([]);

  const createRoute = (route) => {
    const lowerCase = route.toLowerCase();
    return lowerCase.replaceAll(" ", "-");
  };

  useEffect(() => {
    const sorted = sortData( casas );
    setData(sorted);
  }, [order]);

  const sortData = (data) => {
    const sortedData = [...data];

    if (order === "asc") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    return sortedData;
  };

  return (
    <main>
      <div className="galery">

        <select onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ordenar A-Z</option>
          <option value="desc">Ordenar Z-A</option>
        </select>
        <div className="subtitle">
                    <h2>Casas nido</h2>
                </div>
        <div className="galeria grid-columns-4 p-3">
          {data.map((casa) => {
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
