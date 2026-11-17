import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";

export default function App(){

    const [username, setUsername] = React.useState('John')
    return (
        <>
            <Header username={username}></Header>
            <Main username={username}/>
        </>
    )
}