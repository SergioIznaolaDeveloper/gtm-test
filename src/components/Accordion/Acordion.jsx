import React, { useState } from "react";
import { products } from "../../utils/data";
import "./styles.css";

export function Accordion (props) {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  
  const handleOpen = () => {
    setShow(!show);
  };

  return (
    <div id="contenedor-accordian" className="accContainer">
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div id="">¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                {products.map((e,i)=>{return  <div 
                                                className="accButton"
                                                key={i}
                                                id={`product-${i}`}>
                                                <p> {e.name} </p>
                                                <button onClick={()=>{props.value(true,e,i,products)}}>+</button>
                                                <button onClick={()=>{props.value(false,e,i,products)}}>-</button>
                                              </div>
                })}
              </div>
            )}
          </div>
    </div>
  );
}