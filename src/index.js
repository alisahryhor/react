import React from "react"
import ReactDom from "react-dom";
import MainPage from "../src/pages/main";

function App() {
    return (
        <div>
            <MainPage />
        </div>
    )
}


ReactDom.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById("root")
);