import './App.scss';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {

  const [character, setcharacter] = useState([]);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=c7236624677c7d3097f557be598c137d').then(res=>{
      setcharacter(res.data);
      console.log('HEROESS', res.data)
    }).catch(error=>console.log(error))
  },[])

  return (
    <div className="App">
      <h1>Marvel</h1>
    </div>
  );
}

export default App;
