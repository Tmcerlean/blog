import { useEffect } from 'react';

const Admin = () => {

    useEffect(() => {
        document.title = 'Admin Page';
    }, []);

    return (
        <div>
            <p>Admin</p>
        </div>
    )
}

export default Admin;