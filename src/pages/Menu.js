import React from 'react'
import {MenuList} from '../Helpers/MenuList'
import Menuitem from '../components/Menuitem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'> 
      <h1 className='menutitle'>Our Menu</h1>
      <div className='menulist'> 
      {MenuList.map((menuitem,key)=> {
        return <Menuitem
          key={key} 
          image={menuitem.image}
          name={menuitem.name} 
          price={menuitem.price} />
          
          }
          )
          }
          
      </div>
    </div>
  )
}

export default Menu
