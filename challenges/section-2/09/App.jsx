import Joke from "./components/joke";

const jokes = [
    { joke : "What did the DNA say to the other DNA?", punchline:"Do these genes make me look fat"},
    { joke : "My IQ test results came back", punchline:"they were negative"},
    { joke : "What do you call a hippes wife?", punchline:"Mississippi"},
    { joke : "What happens to an illegally parked frog?", punchline:"It gets toad away"},
    { joke : "", punchline:"Mississippi"},
]
export default function App(){
    return (<>
        <Joke setup={jokes[0].joke} punchline={jokes[0].punchline}></Joke>
        <Joke setup={jokes[1].joke} punchline={jokes[1].punchline}></Joke>
        <Joke setup={jokes[2].joke} punchline={jokes[2].punchline}></Joke>
        <Joke setup={jokes[3].joke} punchline={jokes[3].punchline}></Joke>
        <Joke setup={jokes[4].joke} punchline={jokes[4].punchline}></Joke>
    </>)
}