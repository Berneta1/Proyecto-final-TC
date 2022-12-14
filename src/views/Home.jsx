import { useContext } from "react"
import "../assets/styles/home.css"
import { formatPrice } from "../components/utils/Utils.js"

import Context from "../context/context"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const { casas, lamparas, bordados } = useContext(Context)

    const createRoute = (route)=> {
        const lowerCase = route.toLowerCase()
        return lowerCase.replaceAll(" ","-")
    }

    return (
        <main>
            <div className="home-img">
                <div className="text-box">
                    <h1 className="display-1 fw-bold my-5">Arte hecho con amor</h1>
                    <h3 className="my-5"> Productos Unicos y con la exclusividad que personaliza tu espacio</h3>
                </div>
                
            </div>
            <div className="subtitle">
                    <h2>Casas nido</h2>
                </div>
            <div className="galeria grid-columns-4 p-3">
                
                {
                    casas.slice(0,4).map((casa) => {
                        return (
                            <div key={casa.id}
                                 className="card">
                                    <div id="cf">
                                        <img className="bottom" src={casa.img1} alt={casa.name} ></img>
                                        <img className="top" src={casa.img2} alt={casa.name} onClick={() => navigate(`/${casa.type}/${createRoute(casa.id)}`)} ></img>
                                    </div>
                                <div className="card-detail">
                                    <h4>{casa.name}</h4>
                                    <p className="price">${formatPrice(casa.price)}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>
            <div className="subtitle">
                    <h2>Lamparas</h2>
                </div>
            <div className="galeria grid-columns-4 p-3">
                {
                    lamparas.slice(0,4).map((lampara) => {
                        return (
                            <div key={lampara.id}
                                 className="card">
                                    <div id="cf">
                                        <img className="bottom" src={lampara.img2} alt={lampara.name} ></img>
                                        <img className="top" src={lampara.img1} alt={lampara.name} onClick={() => navigate(`/${lampara.type}/${createRoute(lampara.id)}`)} ></img>
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
            <div className="subtitle">
                    <h2>Bordados</h2>
                </div>
            <div className="galeria grid-columns-4 p-3">
                {
                    bordados.slice(0,4).map((bordado) => {
                        return (
                            <div key={bordado.id}
                                 className="card">
                                    <div id="cf">
                                        <img className="bottom" src={bordado.img2} alt={bordado.name} ></img>
                                        <img className="top" src={bordado.img1} alt={bordado.name} onClick={() => navigate(`/${bordado.type}/${createRoute(bordado.id)}`)}  ></img>
                                    </div>
                                <div className="card-detail">
                                    <h4>{bordado.name}</h4>
                                    <p>${formatPrice(bordado.price)}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>



        </main>
    )
}




export default Home