import React from "react";
import Home from "./pages/Home/Home";

import "./scss/app.scss";

export default function App() {
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <div className="main">
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
}
