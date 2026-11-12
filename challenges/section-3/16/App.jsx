import React from 'react'

export default function App() {

    function signUp(formData){
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email, password)
    }
    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp} >
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' placeholder='joe@example.com'/><br/>
                <label htmlFor='password'>Pass:</label>
                <input type="password" name='password' />
                <br/>
                <button>Submit</button>
            </form>
        </section>
    )
}