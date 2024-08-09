import React from "react";
import { Outlet } from "react-router-dom";

import "./scss/app.scss";


export default function App() {
    // const [searchValue, setSearchValue] = React.useState("");

    return (
        <div className="main">
            {/* Здесь будет отображаться содержимое, определенное в дочерних маршрутах */}
            <Outlet  />
        </div>
    );
}
