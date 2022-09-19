import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import About from "../About";

const Routing = ({menuOpened}) => {
    return (
        <Routes>
            <Route path="/" element={<Home menuOpened={menuOpened}/>} />
            <Route path="/about" element={<About menuOpened={menuOpened}/>} />
        </Routes>
    );
};

export default Routing;