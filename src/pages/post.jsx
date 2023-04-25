import { useEffect } from "react"
import { useParams } from "react-router-dom" 

const Post = () =>{
    const { id } = useParams()

    useEffect(()=>{
        // do stuff with the id to get the post back


    },[])


    return(
        <h1>THIS IS MY POST PAGE FOR ID {id}</h1>
    )
}

export default Post