import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Createpost = () => {

    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()  

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
        .then((response) => {
            // console.log(response.data)
            navigate('/feed') 
        })  
    }

  return (
    <h1>
        <section className="create-post-section">
            <h1>create post</h1>
            <form onSubmit={handleSubmit} className="create-post-form">
                <input type="file" name="image" accept="image/*"  />
                <input type="text" name="caption" placeholder="enter caption" required  />
                <button type="submit">Submit</button> 
            </form>
        </section>
    </h1>
  )
}

export default Createpost
