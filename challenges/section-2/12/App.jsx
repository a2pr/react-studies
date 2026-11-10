import Header from "./components/Header";
import Entry from "./components/Entry";
import entries from "./data.js"

export default function App() {
    let elements = entries.map(function (entry) {
        return (<Entry
            key={entry.id}
            img={entry.img}
            title={entry.title}
            mapsRef={entry.mapsRef}
            subTitle={entry.subTitle}
            dateInterval={entry.dateInterval}
            description={entry.description}
        ></Entry>)
    })
    return (
        <>
            <Header></Header>
            <main className="container">
                {elements}
            </main>
        </>
    )
}