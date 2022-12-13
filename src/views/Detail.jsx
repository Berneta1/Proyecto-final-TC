import "../assets/styles/detail.css"
import { formatPrice } from "../components/utils/Utils.js"
import { useNavigate, useParams } from "react-router-dom"

import { useState, useEffect } from "react"

import Context from "../context/context"
import { useContext } from "react"

const Detail = () => {

    const { casas, lamparas, bordados, addToCart } = useContext(Context)

    const { category, name } = useParams()
   

    let currentCategory


    if (category == "casas") currentCategory = casas
    else if (category == "lamparas") currentCategory = lamparas
    else if (category == "bordados") currentCategory = bordados
    const product = currentCategory.find(p => p.id == name)
    console.log(product)

    const navigate = useNavigate()
    const viewProduct = ()=> navigate(`/carrito`)

    return (
        <div className="detail-wrapper">
            <div className="images">
                <img className="detailimg" src={product.img1} alt={product.name}></img>
                <img className="detailimg" src={product.img2} alt={product.name}></img>
            </div>
            <div className="productinfo">
                <h3> {product.name} </h3>
                <h4> ${formatPrice(product.price)} </h4>
                <tr>
                    <td><p>Tamaño:</p></td><td><p>{product.size}</p></td>
                </tr>
                <tr>
                    <td><p>Material: </p></td><td>{product.material}</td>
                </tr>
                <tr>
                    <td><p>Color:</p></td><td>{product.color}</td>
                </tr>
                <tr>
                    <td><p>Descripcion: </p></td><td>{product.detail}</td>
                </tr>

5.30
            </div>
<div className="btn-now">

<button className="btn btn-primary" onClick={()=>viewProduct(addToCart(product))}>comprar</button>
</div>
        </div>
          
    )

}

export default Detail