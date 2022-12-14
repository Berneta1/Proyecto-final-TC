import { Link } from "react-router-dom";

const Footer = ()=> {
    return (
        <div className="footer-basic">
        <footer>
            <div className="social"><a href="https://www.instagram.com/telaranadecristal/"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/login">Admin</Link></li>
                <li className="list-inline-item"><Link to="/quienessomos">Nosotros</Link></li>
                <li className="list-inline-item"><Link to="/buscar">Buscar</Link></li>
                <li className="list-inline-item"><Link to="/contactanos">Contactanos</Link></li>
            </ul>
            <p className="copyright">Telaraña de cristal © 2018</p>
        </footer>
        </div>
    )
}

export default Footer 