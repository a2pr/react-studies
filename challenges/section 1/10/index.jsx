import {createRoot} from "react-dom/client"
import HeaderCustom from "../10/Header";
import MainCustom from "../10/Main";
import FooterCustom from "../10/Footer";

const root = createRoot(document.getElementById('root'))

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

