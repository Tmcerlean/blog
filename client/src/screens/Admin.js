import { useEffect } from 'react';

const Admin = () => {

    useEffect(() => {
        document.title = 'Blog Homepage';
    }, []);

    return (
        <div>
            <p>Admin</p>
        </div>
    )
}

export default Admin;