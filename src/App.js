import React from "react";
import "./App.css";
// import Navbar from './components/Navbar'
// import Header from './components/Header'
import Photo from './components/Photo'
// import Description from './components/Description'

function App() {

// //Initialize the state to hold the image URL
// const [nasaPic, setNasaPic] = useState("")
// useEffect(() => {
//   //This axios GET request will return a single image
//   axios 
//     .get('GET https://api.nasa.gov/planetary/apod')
//     //Which can then be set to state
//     .then(res => setNasaPic(res.data.message))
//     //Must include error handling
//     .catch(err => console.timeLog(err))
// }, [])

  return (
    <div className="App">
      {/* <Navbar />
      <Header /> */}
      <Photo />
      {/* <Description />
      <Permissions /> */}

    </div>
  );
}

export default App;
