import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = 'Blog Homepage';
    }, []);

    return (
        <div>
            <p>Home</p>
        </div>
    )
}

export default Home;