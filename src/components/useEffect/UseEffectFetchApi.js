import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectFetchApi() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const fetchData = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => {
        //         console.log(res);
        //         setPosts(res.data)
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        //     .then(res => {
        //         console.log(res);
        //         setPost(res.data)
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(e => {
                console.log(e);
            })
    }, [idFromButtonClick])

    return (
        <div>
            <div>
                <input type='text' onChange={e => setId(e.target.value)} value={id} />
                <button onClick={fetchData}>Fetch Data</button>
                <h3>{post.title}</h3>
            </div>
            {/* <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )
                }
            </ul> */}
        </div>
    )
}

export default UseEffectFetchApi