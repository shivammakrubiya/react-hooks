import axios from 'axios';
import React, { useState, useEffect } from 'react'

function StateFetching() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
                setLoading(false)
                setError('')
                setPost(response.data)
            })
            .catch(err => {
                setLoading(false)
                setError('Somthing went Wrong')
                setPost({})
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : ''}
        </div>
    )
}

export default StateFetching