import './index.css'
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import {AppRoutes} from "./router/constants.ts";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename={AppRoutes.root}>
        <App/>
    </BrowserRouter>
)