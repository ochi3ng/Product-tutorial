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
    const[colour,setColour]=useState("")
    const Production=()=>{
            if(colour==="grey"){
                setColour("blue")
            }else{setColour("grey")}
            
        
    }
    const[colour1,setColour1]=useState("")
    const Promotion=()=>{
            if(colour1==="gray"){
                setColour1("Red")
            }else{setColour1("gray")}
            
        
    }
   
    {console.log(item.item)}
    return(
        <div className="header2">
        <div className="title">{item.item.title}</div>
        <img className="Images" src={item.item.image}/>
        <div className="price">Ksh.{item.item.price}</div>
        <div className="cartButton">
        <button className="one" onClick={()=>Production("blue")}  style={{background:colour}}>Add to Cart</button>
        <button className="two" onClick={()=>Promotion("Red")}  style={{background:colour1}}>View details</button>
        </div>
    </div>
    )
}
