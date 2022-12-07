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
                <h1>Arte hecho con amor </h1>
            </div>
            <div className="galeria grid-columns-4 p-3">
                {
                    casas.slice(0,4).map((casa) => {
                        return (
                            <div key={casa.id}
                                 className="card">
                                    <div className="card-img">
                                        <img src={casa.img1} alt={casa.name} onClick={() => navigate(`/${casa.type}/${createRoute(casa.id)}`)}></img>
                                    </div>
                                <div className="card-detail">
                                    <h4>{casa.name}</h4>
                                    <p>${formatPrice(casa.price)}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>
            <div className="galeria grid-columns-4 p-3">
                {
                    lamparas.slice(0,4).map((lampara) => {
                        return (
                            <div key={lampara.id}
                                 className="card">
                                    <div className="card-img">
                                        <img src={lampara.img2} alt={lampara.name} onClick={() => navigate(`/${lampara.type}/${createRoute(lampara.id)}`)} ></img>
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
            <div className="galeria grid-columns-4 p-3">
                {
                    bordados.slice(0,4).map((bordado) => {
                        return (
                            <div key={bordado.id}
                                 className="card">
                                    <div className="card-img">
                                        <img src={bordado.img2} alt={bordado.name} onClick={() => navigate(`/${bordado.type}/${createRoute(bordado.id)}`)}></img>
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