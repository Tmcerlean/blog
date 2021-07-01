import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Post from "../components/Post";

const Home = () => {

    const [posts, setPosts] = useState();

    useEffect(() => {
        document.title = 'Blog Homepage';
    }, []);

    useEffect(() => {
    const getPosts = async () => {
        try {
            const req = await fetch(
                "http://localhost:3000/api/posts",
            );
            if (req.status !== 200) {
                return;
            }
            const reqJson = await req.json();
            console.log(reqJson)
            console.log(reqJson.posts)
            setPosts(reqJson.posts);
        } catch (err) {}
    };
    getPosts();
    }, []);

    useEffect(() => {
        console.log("posts", posts)
    }, [posts])

    return (
        <div className="grid-cols-2 text-center w-screen">
            {!posts ? (
                <Skeleton count={8} width={300} height={300} className="m-5" />
            ) : (
                posts.map((post) => <Post key={post._id} content={post} />)
            )}
        </div>
    )
}

export default Home;