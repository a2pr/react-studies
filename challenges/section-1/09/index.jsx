import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById('root'))

function HeaderCustom() {
    return (
        <header className="nav-container">
            <img src="react.webp" alt="react logo" className='logo-img' />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
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

