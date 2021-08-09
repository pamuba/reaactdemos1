import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setidFromButtonClick] = useState(1)


    const handleClick = () => {
        setidFromButtonClick(id)
    }

    //componentDidMount
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [idFromButtonClick])

    return (
        <>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={handleClick} type="button">Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </>
    )
}

export default DataFetching
