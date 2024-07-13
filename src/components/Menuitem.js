import React from 'react'
import { useNavigate } from 'react-router-dom';

function Menuitem({image, name, price}) {
  const navigate = useNavigate();
  return (
    <div>
       <div className='menuItem' style={{backgroundImage: `url(${image})`}}>
    </div>
    <div className='menuitemtext'>
      <h1>{name}</h1> <p>{price}</p>
        <p><button onClick={(handlemenuclick)=>navigate("/Cart")} >Add To Cart</button></p>
    </div>

    </div>
  
  );
}

export default Menuitem
