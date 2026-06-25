import React ,{ useState , useEffect } from 'react'
import axios from "axios"

const Feed = () => {

    const [posts , setPosts] = useState([
        {
            _id:1,
            image:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
            caption:"beautiful scenery"     
        }
    ])

    useEffect(() =>{
        axios.get("http://localhost:3000/posts")
        .then((response) => {
            setPosts(response.data.post)
        })
    },[])

  return (
   <section className="feed-section">
    {
        posts.map((post) => (
            <div key={post._id} className="post">
                <img src={post.image} alt={post.caption} className="post-image" />
                <p className="post-caption">{post.caption}</p>
            </div>
        ))

    }
   </section>
  )
}

export default Feed
