/*
1. useToggle - custom React hook that allows a component to toggle a value between true and false
import { useState } from "react"
 */

import React from 'react';
import './componens/Content.tsx';
import './App.css';
import Content from "./componens/Content";

const App: React.FC = () => {
    return (
        <div className="App">
            <Content />
        </div>
    );
}

export default App;

