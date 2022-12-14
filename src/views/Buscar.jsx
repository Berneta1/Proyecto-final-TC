import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../context/context.js";
import { formatPrice } from "../components/utils/Utils.js";
import { useNavigate } from "react-router-dom";

const Busqueda = () => {
  const { todos } = useContext(Context); // data para filtrar
  const [value, setValue] = useState("/"); // data string ingresada por imput
  const [result, setResult] = useState([]); // resultado de la busqueda en array

  const navigate = useNavigate();
  const createRoute = (route) => {
    const lowerCase = route.toLowerCase();
    return lowerCase.replaceAll(" ", "-");
  };
  useEffect(() => {
    if (value == "") {
      setValue("/");
    } else {
      filterData();
    }

  }, [value]);

  const filterData = () => {
    const buscar = value.toLowerCase();
    const filtrado = todos.filter((producto) => {
      const name = producto.name.toLowerCase();
      const type = producto.type.toLowerCase();
      const style = producto.style.toLowerCase();

      return (
        name.includes(buscar) || type.includes(buscar) || style.includes(buscar)
      );
    });
    setResult(filtrado);
  };

  return (
    <>
      <div className="buscar">
        <div className="search-box">
          <input
            className="buscador"
            type="text"
            required
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <i className="fa fa-search"></i>
        </div>
      </div>

      <h4 className="descripcion">{`${result.length} Productos encontrados`}</h4>
      <div className="galeria grid-columns-4 p-3">
        {result.map((filtrado) => {
          return (
            <div key={filtrado.id} className="card">
              <div id="cf">
                <img
                  className="bottom"
                  src={filtrado.img1}
                  alt={filtrado.name}
                ></img>
                <img
                  className="top"
                  src={filtrado.img2}
                  alt={filtrado.name}
                  onClick={() =>
                    navigate(`/${filtrado.type}/${createRoute(filtrado.id)}`)
                  }
                ></img>
              </div>
              <div className="card-detail">
                <h4>{filtrado.name}</h4>
                <p>${formatPrice(filtrado.price)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Busqueda;
