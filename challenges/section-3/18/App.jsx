import React from 'react'

export default function App() {

    function signUp(formData) {
        const email = formData.get('email')
        const password = formData.get('password')
        const employmentStatus = formData.get('employmentStatus')
        console.log(email, password, employmentStatus)
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' defaultValue='a2payema.work@gmail.com'
                       placeholder='joe@example.com'/><br/>
                <label htmlFor='password'>Pass:</label>
                <input type="password" name='password' defaultValue='123456'/>
                <br/>
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" defaultValue='textarea'></textarea>
                <br/>
                <fieldset>
                    <legend> Employment Status:</legend>
                    <label>
                        <input type="radio" name='employmentStatus' defaultChecked={true} value='unemployed'/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name='employmentStatus' value='part-time'/>
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name='employmentStatus' value='fulltime'/>
                        Fulltime
                    </label>
                </fieldset>

                <button>Submit</button>
            </form>
        </section>
    )
}