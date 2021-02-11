import React from 'react';
 
const Darkmode = () => {
    const initialMode = () => {
        const returnUser = 'dark' in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userDark = getPrefColors();
        if(returnUser) {
            return savedMode;
        }else if (userDark){
            return true;
        }else {
            return false;
        }
    }
    const getPrefColors =() => {
        if (!window.matchMedia) return;
        return window.matchMedia("(prefers-colors-scheme: dark)").matches;
    }
    const [ darkMode, setDarkMode ] = React.useState(initialMode());
    React.useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);
     return (
         <div className={darkMode ? "dark-mode" : "light-mode"}>
            <button id="toggle" 
            onClick={() => setDarkMode(prevMode => !prevMode)}>
            </button>
            <h1>{darkMode ? "DarkMode tu connais" : "LightMode tu reconnais"}</h1>
        </div>
     )
}

export default Darkmode;
 