import './App.css';
import Menu from "./components/UI/menu/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Routing from './components/routing/Routing'
import {useState} from "react";
import React from "react";

function App() {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className={'App'}>
            <BrowserRouter>
                 <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
                <Routing menuOpened={menuOpened}/>
            </BrowserRouter>
        </div>
  );
}

export default App;
