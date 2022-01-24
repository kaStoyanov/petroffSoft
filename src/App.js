import axios from 'axios'
import './App.css';
import { useEffect, react, useState } from 'react'



function App() {
  const url = 'https://api.zippopotam.us/us/'
  const handleInput = (e) => {
    e.preventDefault()
    let arr = e.target.value.split(',')
    console.log(arr)
    setZip(arr)

  }
  let multipleZips = []
  const submit = async () => {
    try {
      zip.forEach(async (e) => {
        console.log(e)
        await axios.get(url + e).then((response) => {
          console.log(e)
          response.data.places.forEach((e) => {
            multipleZips.push(`https://www.google.com/maps/search/?api=1&query=${e.latitude},${e.longitude}`)
            console.log(multipleZips)
          })
        });
        setTimeout(() => {
          setZips(multipleZips)
        }, 150);

        console.log(zips)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const [zip, setZip] = useState();
  const [zips, setZips] = useState([]);
  return (
    <div className="App-header" >
      <input onChange={handleInput} ></input>
      <button style={{ width: '150px', margin: '15px' }} onClick={submit}>Submit</button>
      <div >
        {
          zips.map((e, i) => {
            return <li key={i}>
              <a style={{ color: 'white' }} href={e}>Google Endpoint</a>
            </li>
          })

        }

      </div>
    </div>

  );
}

export default App;
