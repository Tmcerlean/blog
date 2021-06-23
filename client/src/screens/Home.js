import { useEffect } from 'react';
import Header from '../components/Header';

const Home = ({ user: loggedInUser }) => {

    useEffect(() => {
        document.title = 'Blog Homepage';
    }, []);

    return (
        <div>
            <Header />
            <p>Test</p>
        </div>
    )
}

export default Home;