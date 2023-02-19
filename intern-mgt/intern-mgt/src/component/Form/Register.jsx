import React, {useState} from 'react';


export const Register = (props) =>{
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return(
        <div className = 'form-container'>
            <div>Register</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Fullname</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your fullname' />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='@example.com' />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='*********'  />
            <button className='btn' type='submit'>Log In</button>
        </form>
        <button onClick={() => props.ofFormSwitch('login')}>Already have an account? | Login here</button>
        </div>
    )
}
