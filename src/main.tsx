import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes/constants.ts";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter basename={AppRoutes.root}>
        <App/>
    </BrowserRouter>
)