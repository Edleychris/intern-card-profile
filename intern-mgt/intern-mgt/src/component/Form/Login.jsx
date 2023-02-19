import React, {useState} from 'react';
import './form.css';


export const Login = ({ onLogin }) =>{
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }; 
    return(
        <div className = 'form-container'>
            <div className='log'>Log In</div>
        <form className='form' onSubmit={(e) => handleSubmit(e, email, pass)}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your email' required />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='*********' required  />
        <button className='btn' type='submit'>Log In</button>
        </form>
        </div>
    )
}
