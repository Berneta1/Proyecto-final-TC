import { useContext } from "react"
import "../assets/styles/home.css"
import Context from "../context/context"
import { formatPrice } from "../components/utils/Utils.js"
import { useNavigate } from "react-router-dom";

const Lamparas = () => {
    const { lamparas } = useContext(Context)
    const navigate = useNavigate ()

    const createRoute = (route)=> {
        const lowerCase = route.toLowerCase()
        return lowerCase.replaceAll(" ","-")
    }

    return (
        <main>
            <div className="galery">
                <div className="galeria grid-columns-4 p-3">
                    {
                        lamparas.map((lampara) => {
                            return (
                                <div key={lampara.id}
                                    className="card">
                                    <div className="card-img">
                                        <img src={lampara.img1} alt={lampara.name} onClick={() => navigate(`/${lampara.type}/${createRoute(lampara.id)}`)}></img>
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
        </main>
    )
}

export default Lamparas