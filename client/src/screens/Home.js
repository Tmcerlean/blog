import { useEffect, useState } from 'react';
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
                "https://dovimaj-blog-api.herokuapp.com/api/posts"
            );
            if (req.status !== 200) {
                return;
            }
            const reqJson = await req.json();
            setPosts(reqJson.posts);
        } catch (err) {}
    };
    getPosts();
    }, []);

    return (
        <div className="container">
            {posts && posts.map((post) => {
                return <Post key={post._id} post={post} />;
            })}
        </div>
    )
}

export default Home;