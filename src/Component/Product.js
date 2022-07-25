import React, { useEffect, useState } from "react"
import axios from "axios"

function Product(){
  const  Url="https://fakestoreapi.com/products/"
const[product,setProduct]=useState(null)
useEffect(()=>{
    axios.get(Url)
    .then(Response=>{
        setProduct(Response.data)
    })
}, [Url])
if(product){
    return(
        <div className="header">
     {product.map((item)=><h1><Component item={item}/></h1>)}
    
        </div>
    )
}

return(
    <div>
    </div>
)
}
export default Product
const Component=(item)=>{
    {console.log(item.item)}
    return(
        <div className="header2">
        <div className="title">{item.item.title}</div>
        <img className="Images" src={item.item.image}/>
        <div className="price">Ksh.{item.item.price}</div>
    </div>
    )
}
