import React from "react";


export default function Card(){
  return(
   <div className="bg-white">
        <div>
        <h3 className="pt-1" >Perfume</h3>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="pt-1">A floral, solar and voluptuos interpretation composed by Oliever Polge, Perfurm-Creator for the House of CHANEL.</p>
        <div className="d-flex pt-2">
          <p>$149.99</p>
          <p className="text-line">$169.99</p>
        </div>
        <button className="mt-3">Add to Cart</button>
        </div>
      </div>
  )
  
}