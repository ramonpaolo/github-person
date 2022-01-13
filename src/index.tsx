import React from "react";
import ReactDOM from "react-dom";

// ---- Styles
import "./index.css";

// ---- Views
import App from "./App";

// ---- Providers
import { SearchUserProvider } from "./providers/SearchUserProvider";

ReactDOM.render(
    <React.StrictMode>
        <SearchUserProvider>
            <App />
        </SearchUserProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
