import Header from "./components/Header";
import Entry from "./components/Entry";

const entries = [
    {
        img: {
            src: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdsFClg1DenBQB_2I22f5KQ7cv7E0rOJ7JMOcNMAgpPGT_-KeVoa5eQ0ozDHcgvneHc8Da1Z4mtvYQsTpcII0j3Lq35pIu_Jl2qimztOe_pIn-gBgy_Dq46V-qeIyrqvpOJ0ZxGsiWNvII=w408-h306-k-no',
            alt: 'fuji'
        },
        title: 'JAPAN',
        mapsRef: 'https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu',
        subTitle: 'Mount Fuji',
        dateInterval: '12 Jan, 2021 - 24 Jan, 2021',
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is\n" +
            "                    the\n" +
            "                    single most popular tourist site in Japan, for both Japanese and foreign tourists."
    }
]
export default function App() {
    return (
        <>
            <Header></Header>
            <main className="container">
                <Entry
                    img={entries[0].img}
                    title={entries[0].title}
                    mapsRef={entries[0].mapsRef}
                    subTitle={entries[0].subTitle}
                    dateInterval={entries[0].dateInterval}
                    description={entries[0].description}
                ></Entry>
            </main>
        </>
    )
}