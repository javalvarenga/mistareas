import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      try {
        const TareaGuardadaItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!TareaGuardadaItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(TareaGuardadaItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (catchError) {
        setError(catchError);
      }
    }, 2000);
  },[initialValue,itemName]);

  

  const guardarItem = (nuevoItem) => {
    try {
      const itemToString = JSON.stringify(nuevoItem);
      localStorage.setItem(itemName, itemToString);
      setItem(nuevoItem);
    } catch (catchError) {
      setError(catchError);
    }
  };

  return { item, guardarItem, loading, error };
}

export { useLocalStorage };
