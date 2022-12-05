import { useContext } from "react"
import "../assets/styles/home.css"

import Context from "../context/context"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { casas, lamparas, bordados } = useContext(Context)

    return (
        <main>
            <div className="home-img">
                <h1>Arte con amor </h1>
            </div>
            <div className="galeria grid-columns-4 p-3">
                {
                    casas.slice(0,4).map((casa) => {
                        return (
                            <div key={casa.id}
                                 className="card">
                                    <div className="card-img">
                                        <img src={casa.img1} alt={casa.name}></img>
                                    </div>
                                <div className="card-detail">
                                    <h4>${casa.name}</h4>
                                    <p>${casa.price}</p>
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
                                        <img src={lampara.imgon} alt={lampara.name}></img>
                                    </div>
                                <div className="card-detail">
                                    <h4>{lampara.name}</h4>
                                    <p>${lampara.price}</p>
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
                                        <img src={bordado.img} alt={bordado.name}></img>
                                    </div>
                                <div className="card-detail">
                                    <h4>{bordado.name}</h4>
                                    <p>${bordado.price}</p>
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