import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import * as ROUTES from '../constants/routes';

const Login = () => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isUsernameValid = (username !== '' && username.length > 2);
    const isPasswordValid = (password !== '' && password.length > 5);
    const isLoginValid = isUsernameValid && isPasswordValid;

    useEffect(() => {
        document.title = 'Login';
    }, []);

    const signIn = (e) => {

        e.preventDefault();

        // Do something
    }

    return (
        <div className="bg-gray-100">
            <Header />
            <div className="container h-screen mx-auto flex flex-col flex-wrap">
                <div className="container border rounded m-auto w-1/4 flex flex-wrap justify-center bg-white shadow-new">
                    <h1 className="text-3xl m-4">Blog.</h1>
                    <form className="flex flex-wrap justify-center">
                        <input 
                            className="border rounded w-9/12 p-1 mb-2 pl-2 bg-gray-200 outline-none" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            className="border rounded w-9/12 p-1 mb-4 pl-2 bg-gray-200 outline-none" 
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button 
                            className={`border rounded w-9/12 p-1 mb-4 bg-blue-400 text-white font-medium ${isLoginValid ? "cursor-pointer" : "bg-opacity-50 cursor-default"}`}
                            onClick={signIn}
                        >Log In</button>
                        <div className="mb-4">
                            <p>Don't have an account? <Link to={ROUTES.SIGNUP} className="font-medium text-blue-500 cursor-pointer">Sign up</Link></p>
                        </div>
                        {error.length > 0 && <p className="text-xs text-red-600">{error}</p>}
                    </form>
                </div>
            </div>    
        </div>
    )

}

export default Login;