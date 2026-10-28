export default function HeaderCustom() {
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