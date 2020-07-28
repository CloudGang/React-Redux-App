import { useState } from 'react';

const useLocalStorage = (key, initialValue, setValue) => {

    const [storedValue, setStoredValue] = useState(() => {

        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;

    });
    
    setValue = (value) => {

        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));

    };

    return [storedValue, setValue];
    
};

export default useLocalStorage;