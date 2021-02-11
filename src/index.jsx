import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import Home from 'Pages/Home';
import Works from 'Pages/Works';
import About from 'Pages/About';
import Navbar from 'Compenent/Navbar';
import ThemeContextProvider from 'Context/index';
import BtnToggle from 'Compenent/BtnToggle';
import {ThemeContext} from 'Context/index';
import 'new.scss';
import 'reset.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <div 
        className={theme ? 'container light' : 'container dark'}
        >
            <ThemeContextProvider>
                <Router>
                    <main>
                        <br/><br/>
                        <Navbar />
                        <BtnToggle />
                        <Switch>
                            <Route path="/about">
                            <About />
                            </Route>
                            <Route path="/works">
                            <Works />
                            </Route>
                            <Route path="/" exact>
                            <Home />
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </ThemeContextProvider>
            </div>
)
}
ReactDOM.render(<App />, document.getElementById('root'));
