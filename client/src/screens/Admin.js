import { useEffect } from 'react';
import Header from '../components/Header';

const Admin = () => {

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

export default Admin;