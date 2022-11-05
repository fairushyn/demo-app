import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Menggunakan Hooks untuk perubahan state email dan password
function Login() {

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const { email, password } = state;

    /* Deklarasikan method handleEmailChange */
    const handleEmailChange = (event) => {
        const inputValue = event.target.value;
        setState({
            email: inputValue
        })
    }
    const handlePasswordChange = (event) => {
        const inputValue = event.target.value;
        setState({
            password: inputValue
        })
    }

    return (
        <div className='login-container' >
            <div className='form-login'>
                <form >
                    <label>Email</label>
                    <input
                        type='text'
                        value={email}
                        onChange={(event) => { handleEmailChange(event) }}
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(event) => { handlePasswordChange(event) }}
                    />
                    <Link>Lupa Password</Link>
                    <input
                        type='submit'
                        value='Login'
                    />
                </form>
            </div>
        </div>
    );

}


export default Login
