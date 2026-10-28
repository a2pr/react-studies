import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))

function Page() {
    return (
        <div>
            <header>
                <img src="react.webp" alt="react logo" width="40px"/>
            </header>
            <main>
                <h1>Reasons i want to learn React</h1>

                <ol>
                    <li> more job opportunities</li>
                    <li> new tool for my work</li>
                    <li> finally crossing the line of using this tool</li>
                </ol>
            </main>
            <footer>
                © 2026 Payema Development. All rights reserved.
            </footer>
        </div>
    )
}

root.render(
    <Page/>
)

