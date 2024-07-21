import { useEffect, useState } from "react";

function useLocalStorage(tag, initialState) {
  const storedValue = JSON.parse(localStorage.getItem(tag));
  const [item, setItem] = useState(
    storedValue !== null ? storedValue : initialState
  );

  const getStorageItem = () => {
    return JSON.parse(localStorage.getItem(tag));
  };

  const setStorageItem = (newItem) => {
    localStorage.setItem(tag, JSON.stringify(newItem));
    setItem(newItem);
  };

  const addItem = (newItem) => {
    const items = getStorageItem() || initialState;
    if (Array.isArray(items)) {
      const newArray = [...items, newItem];
      setStorageItem(newArray);
    } else {
      setStorageItem(newItem);
    }
  };

  useEffect(() => {
    if (storedValue === null) {
      setStorageItem(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag, initialState, storedValue]);

  return {
    item,
    getStorageItem,
    setStorageItem,
    addItem,
  };
}

export { useLocalStorage };
