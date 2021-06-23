import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import * as ROUTES from '../constants/routes';

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isEmailValid = (email.includes("@") && email.includes("."));
    const isPasswordValid = (password !== '' && password.length > 5);
    const isLoginValid = isEmailValid && isPasswordValid;

    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <div>
            <Header />
            <div className="flex h-screen bg-gray-100">
                <div className="container m-auto w-1/4 align-middle bg-gray-300">
                    <p>Blog</p>
                </div>
            </div>
        </div>
    )

}

export default Login;