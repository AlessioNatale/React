import React, { useState } from 'react';
import classes from "./TodoList.module.scss"

export function Todolist({ items }) {
  const [newItem, setNewItem] = useState(''); 
  const [itemsArray, setItemsArray] = useState(items); 

  const handleAddItem = () => {
   
      const updatedItemsArray = [...itemsArray, newItem];
      setItemsArray(updatedItemsArray);

      setNewItem(''); 
    
  };


  const handleRemoveItem = (index) => {
    const updatedItemsArray = itemsArray.filter((_, i) => i !== index);
    setItemsArray(updatedItemsArray);
  };

  return (
    <div className={classes.todo}>
      <ul>
        {itemsArray.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Elimina</button>
          </li>
        ))}
      </ul>
      <input className={classes.inputClass} value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button className={classes.button} onClick={handleAddItem}>Aggiungi</button>
    </div>
  );
}

