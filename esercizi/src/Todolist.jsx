import React, { useState } from 'react';

export function Todolist({ items }) {
  const [newItem, setNewItem] = useState(''); 
  const [itemsArray, setItemsArray] = useState(items); 

  
  const handleAddItem = () => {
  
      const updatedItems = [...itemsArray, newItem]; 
      
      setItemsArray(updatedItems);
      setNewItem(''); 

    //   console.log(updatedItems)
  };

  console.log(items)

  return (
    <div>
      <ul>
        {itemsArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAddItem}>Aggiungi</button>
    </div>
  );
}
