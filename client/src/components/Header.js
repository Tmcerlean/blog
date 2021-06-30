const Header = ({ userAuth, setUserAuth }) => {

    const logout = () => {
        console.log(typeof(setUserAuth))
        localStorage.clear();
    };

    return (
        <div className="flex border-b justify-between border-gray-500 h-4 p-4 py-8">
            <div className="flex items-center text-4xl">
                Blog.
            </div>
            {userAuth && (
                <button className="" onClick={() => logout()}>
                    Logout
                </button>
            )}
        </div>
    )
}

export default Header;