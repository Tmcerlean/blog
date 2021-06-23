import { useEffect } from 'react';
import Header from '../components/Header';

const NotFound = () => {

    useEffect(() => {
        document.title = 'Not Found';
    }, []);

    return (
        <div>
            <Header />
            <div className="">
                <p className="">
                    Not Found!
                </p>
            </div>
        </div>
    )
}

export default NotFound;