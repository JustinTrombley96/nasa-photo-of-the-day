//Photo
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Photo() {
//Initialize the state to hold the image URL
    const [nasaPic, setNasaPic] = useState("")
    useEffect(() => {
    //This axios GET request will return a single image
        axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        //Which can then be set to state
        .then(res => 
            {console.log(res)
            setNasaPic(res.data.hdurl)})
        //Must include error handling
        .catch(err => console.timeLog(err))
}, [])
return (
    <div className="Photo">
    <img src={nasaPic} alt="a random nasa pic" />
    </div>
)
}
export default Photo