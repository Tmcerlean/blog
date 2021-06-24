import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Signup = () => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState('');
    
    const isUsernameValid = username.length > 0;
    const isPasswordValid = (password !== '' && password.length > 5);
    const isPasswordConfirmationValid = (password === passwordConfirmation);
    const isSignupValid = isUsernameValid && isPasswordValid && isPasswordConfirmationValid;

    useEffect(() => {
        document.title = 'Signup';
    }, []);

    const signUp = async (e) => {

        e.preventDefault();

        // Do something
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto flex flex-col flex-wrap h-screen">
                <div className="container border rounded m-auto w-1/4 flex flex-wrap justify-center bg-white shadow-new">
                    <h1 className="text-3xl m-4">Blog.</h1>
                    <form className="flex flex-wrap justify-center">
                        <input 
                            className="border rounded w-9/12 p-1 mb-2 pl-2 bg-gray-100 outline-none"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input 
                            className="border rounded w-9/12 p-1 mb-2 pl-2 bg-gray-100 outline-none"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            className="border rounded w-9/12 p-1 mb-4 pl-2 bg-gray-100 outline-none"
                            name="passwordConfirmation"
                            placeholder="Confirm Password"
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        <button 
                            className={`border rounded w-9/12 p-1 mb-4 bg-blue-400 text-white font-medium ${isSignupValid ? "cursor-pointer" : "bg-opacity-50 cursor-default"}`}
                            onClick={signUp}
                        >Register</button>
                        <div className="mb-4">
                            <p>Have an account? <Link to={ROUTES.LOGIN} className="font-medium text-blue-500 cursor-pointer">Log in</Link></p>
                        </div>
                        {error.length > 0 && <p className="text-xs text-red-600">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
