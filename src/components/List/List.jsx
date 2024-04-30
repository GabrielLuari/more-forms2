import React from 'react'
import style from './List.module.css'
function rem() {
  var rem  = document.getElementById('rem')
    rem.remove();
  

  
}
function List({users}) {
  return (

    
    <ul  className={style.li}>


        {
           
        users.map( (item,index)=>
        
       <li id='rem' key={index}>  firstName: {item.firstName} email: {item.email} 
       <input onClick={rem} type="button" value="Delete" />
       </li>

       
        )
        }
        
    </ul>
  )
}

export default List
