import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header";
import App from "./components/App";
import SideNav from './components/SideNav';

const Root = () => {
    return (
        <App/>
    )
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);