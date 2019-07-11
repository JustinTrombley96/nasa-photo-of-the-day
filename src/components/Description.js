//Name of Photo
//Image Credit and Copyright
//Explanation
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Description() {
    const [nasaDescription, setNasaDescription] = useState("")
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => setNasaDescription(res.data))
    }, [])

return (
    <div className="App">
    <h1>{nasaDescription.title}</h1>
    <h5>Copyright: {nasaDescription.copyright}</h5>
    <h3>Description: {nasaDescription.explanation}</h3>
    </div>
)
}
export default Description