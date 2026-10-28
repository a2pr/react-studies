import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))

root.render(
    <main>
        <img width="40px" src="react.webp" alt="react logo"/>
        <h2>React Facts</h2>
        <ul>
            <li>its not my first choice for js libraries</li>
            <li>about 70% of job posting use react</li>
            <li>I being trying to learn it for about 5 years</li>
        </ul>
    </main>
)
