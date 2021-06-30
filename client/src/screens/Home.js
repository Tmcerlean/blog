import { useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {

    useEffect(() => {
        document.title = 'Blog Homepage';
    }, []);

    return (
        <div>
            <Header />
            <p>Home</p>
        </div>
    )
}

export default Home;