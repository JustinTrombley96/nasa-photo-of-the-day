//Photo
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {CardMedia} from '@material-ui/core'

function Photo() {
//Initialize the state to hold the image URL
    const [nasaPic, setNasaPic] = useState("")
    useEffect(() => {
    //This axios GET request will return a single image
        axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=1hliEghmtffq93NG8ff70Jb6ZBcjDOGNypk3tOU4')
        //Which can then be set to state
        .then(res => 
            {console.log(res)
            setNasaPic(res.data.url)})
        //Must include error handling
        .catch(err => console.timeLog(err))
}, [])
return (
    <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={nasaPic}
        />
)
}
export default Photo