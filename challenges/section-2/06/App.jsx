import Contact from "./components/Contact";

export default function App() {

    return (
        <div className="contacts">
            <Contact
                img="./images/cat1.jpg"
                name="Mr. Whiskerson"
                phone="5592984240045"
                email="a2p@gmail.com"
            ></Contact>
            <Contact

                img="./images/cat2.jpeg"
                name="Mr. domino"
                phone="5592984240046"
                email="a2p2@gmail.com"></Contact>
            <Contact
                img="./images/cat3.jpg"
                name="Mr. j"
                phone="5592984240047"
                email="a2p3@gmail.com"></Contact>
            <Contact

                img="./images/cat4.jpeg"
                name="Mr. kji"
                phone="5592984240048"
                email="a2p4@gmail.com"></Contact>
        </div>
    )
}