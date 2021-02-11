import React, {useContext} from 'react';
import 'Compenent/BtnToggle/BtnToggle.scss';
import {ThemeContext} from 'Context/index';
const BtnToggle = () => {
    const {toggleTheme, theme} = useContext(ThemeContext);
    return (
        <div 
        onClick={toggleTheme}
        className={theme ? 'btn-toggle light-mode' : 'btn-toggle dark-mode'}>
            {theme ? "Dark" : "Light"}
        </div>
    )
}

export default BtnToggle;