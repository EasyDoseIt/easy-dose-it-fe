import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import authAxios from '../../utils/authAxios';
import './Form.css';

const Login = () => {
    const [ login, setLogin ] = useState({ username: '', password: '' })
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        authAxios().post('/login', login)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data.token)
        })
        .catch(err => err)
        
        setLogin({
            username: '', password: ''
        })
    }
    
    const handleChange = (e) => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }
    return (
        <main>
             <form onSubmit={handleSubmit}>
            <div className='input username'>
                <label htmlFor='username'>Username</label>
                <input
                type='text'
                name='username'
                value={login.username}            
                onChange={handleChange}
                placeholder='marberryjane'
                />
            </div>
            <div className='input password'>
                <label htmlFor='user_password'>Password</label>
                <input
                type='password'
                name='password'
                value={login.password}
                onChange={handleChange}
                placeholder=''
                />
            </div>
            <div className='loginOptions'>
                <button type='submit'>Sign in</button>
                <div className='options'>
                    <span className='loginSpan'>Not a member?
                        <Link to='/register'>Sign up</Link>
                    </span>                    
                </div>           
            </div>            
        </form>
        </main>
    );
;}

export default Login;