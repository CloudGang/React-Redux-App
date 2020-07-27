import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (dark) => {

    const [darkMode, setDarkMode] = useLocalStorage(dark)

    useEffect(() => {

        const body = document.querySelector("body");

        if (darkMode) {

            body.className = "dark-mode"

        } else {

            body.className = ""

        }

    }, [darkMode])

    return [darkMode, setDarkMode]
    
}

export default useDarkMode;