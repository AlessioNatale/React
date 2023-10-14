import React, { useState } from 'react';

export function Todolist({ items }) {
  const [newItem, setNewItem] = useState(''); 
  const [itemsArray, setItemsArray] = useState(items); 

  
  const handleAddItem = () => {
  
      const updatedItems = [...itemsArray, newItem]; 
      
      setItemsArray(updatedItems);
      setNewItem(''); 
      //l'avevo gia fatto anche nell'esercizio precedente basta aggiungere alla funzione setNewItem
      //un paramentro vuoto cosi da resettare il campo dell'input

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
