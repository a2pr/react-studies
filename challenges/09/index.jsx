import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))

function HeaderCustom() {
    return (
        <header>
            <img src="react.webp" alt="react logo" width="40px"/>
            <nav>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainCustom() {
    return (
        <main>
            <h1>Reasons i want to learn React</h1>

            <ol>
                <li> more job opportunities</li>
                <li> new tool for my work</li>
                <li> finally crossing the line of using this tool</li>
            </ol>
        </main>
    )
}

function FooterCustom() {
    return (
        <footer>
            © 2026 Payema Development. All rights reserved.
        </footer>
    )
}

function Page() {
    return (
        <>
            <HeaderCustom/>
            <MainCustom/>
            <FooterCustom/>
        </>
    )
}

root.render(
    <Page/>
)

