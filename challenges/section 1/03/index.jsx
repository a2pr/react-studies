import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))

const el = document.createElement('h1')
el.className = 'header'
el.textContent = 'Some text content'
document.getElementById('root').appendChild(el)