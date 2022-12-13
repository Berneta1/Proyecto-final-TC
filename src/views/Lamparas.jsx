import { useContext } from "react";
import "../assets/styles/home.css";
import Context from "../context/context.js";
import { formatPrice } from "../components/utils/Utils.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const Lamparas = () => {
  const { lamparas } = useContext(Context);
  const navigate = useNavigate();
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([])

  const createRoute = (route) => {
    const lowerCase = route.toLowerCase();
    return lowerCase.replaceAll(" ", "-");
  };

  useEffect(() => {
    const sorted = sortData(lamparas);
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
                <div className="galeria grid-columns-4 p-3">
                    {
                        lamparas.map((lampara) => {
                            return (
                                <div key={lampara.id}
                                    className="card">
                                    <div id="cf">
                                        <img className="bottom"src={lampara.img1} alt={lampara.name}></img>
                                        <img className="top" src={lampara.img2} alt={lampara.name} onClick={() => navigate(`/${lampara.type}/${createRoute(lampara.id)}`)} ></img>
                                    </div>
                                    <div className="card-detail">
                                        <h4>{lampara.name}</h4>
                                        <p>${formatPrice(lampara.price)}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Lamparas;
