import { StrictMode } from "react"
import { App } from "./App"
import {createRoot} from "react-dom/client"
import { SWRConfig } from "swr"

import "./index.css"

const fetcher = (url) => fetch(url).then((response) => response.json())

createRoot(document.getElementById("root")).render(
    <SWRConfig value={{fetcher}}>
        <App/>
    </SWRConfig>

)