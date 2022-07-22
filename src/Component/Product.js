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
        <div>
            <h1>hello</h1>
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
        <div>
        <h1>{item.item.title}</h1>
        <img src={item.item.image}/>
        <h2>Ksh.{item.item.price}</h2>
    </div>
    )
}
