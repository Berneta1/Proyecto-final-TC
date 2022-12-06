import "../assets/styles/detail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Context from "../context/context"
import { useContext } from "react"

const Detail = () => {

    const { todos, casas, lamparas, bordados } = useContext(Context)

    const { category, name } = useParams()


    let currentCategory


    if (category == "casas") currentCategory = casas
    else if (category == "lamparas") currentCategory = lamparas
    else if (category == "bordados") currentCategory = bordados
    const product = currentCategory.find(p => p.id == name)
    console.log(product)


    return (
        <div className="detail-wrapper">
            <div className="images">
                <img className="detailimg" src={product.img1} alt={product.name}></img>
                <img className="detailimg" src={product.img2} alt={product.name}></img>
            </div>
            <div className="details">
                <h3> {product.name} </h3>
                <h4> ${product.price} </h4>
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


            </div>

        </div>

    )

}

export default Detail