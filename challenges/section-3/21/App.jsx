import React from 'react'

export default function App() {

    const [messages, setMessages] = React.useState(['a'])

    let unreadMessages = messages.length > 0;
    let unreadMsg
    if (unreadMessages) {
        unreadMsg = messages.length === 1 ? 'You have 1 unread message' : `You have ${messages.length} unread messages`
    } else {
        unreadMsg = ''
    }
    return (
        <section>
            <h1>{unreadMessages ? unreadMsg : 'You are all caught up!'}</h1>
        </section>
    )
}