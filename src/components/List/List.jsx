import React from 'react'
import style from './List.module.css'
function List({users, setUsers }) {
  const remove = (e, idx) => {
    e.preventDefault();
    const filteredList = users.filter(( item, index) => index !== idx);
    setUsers(filteredList);
  };

  return (
    <ul className={style.li}>
      {users.map((item, index) => (
        <li key={index}>
          firstName: {item.firstName} email: {item.email} 
          <input onClick={(e) => remove(e, index)} type="button" value="Delete" />
        </li>
      ))}
    </ul>
  );
}

export default List;