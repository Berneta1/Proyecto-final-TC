import { useContext } from "react"
import "../assets/styles/home.css"
import Context from "../context/context"
import { useNavigate } from "react-router-dom";

const Lamparas = ()=> {
    const { casas, lamparas, bordados } = useContext(Context)

    return (
        <main>
            <div className="home-img">
                <h1>Arte con amor </h1>
            </div>
            <div className="galeria grid-columns-4 p-3">
                {
                    lamparas.map((lampara) => {
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
        </main>
    )
}

export default Lamparas