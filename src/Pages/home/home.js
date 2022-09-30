import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import './home.scss'

export const Home = () => {

//private= b24bd34c4a885bb06ff7809c6f94727f846f05bb
  //public= c7236624677c7d3097f557be598c137d
  //ts=1

  //1b24bd34c4a885bb06ff7809c6f94727f846f05bbc7236624677c7d3097f557be598c137d

  //hash: 54f278ba06198f1d1b9b479cd9752541

  const [character, setcharacter] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c7236624677c7d3097f557be598c137d&hash=54f278ba06198f1d1b9b479cd9752541').then(res=>{
      setcharacter(res.data.data.results);
      console.log(res.data)
    }).catch(error=>console.log(error))
  },[])

  console.log("CHARACTERS",character)

  return (
    <div >
      <h1>Marvel</h1>
      <div className='row row-cols-1 h-100 row-cols-md-3 g-4'>
        {character.map(char=>(

          <div className='col' key={char.id}>
            <div className='card' style={{width: "20rem", height: "21rem"}}>
              <img alt='' src={`${char.thumbnail.path}.${char.thumbnail.extension}`} className='card-img-top'/>
              <div>
              <h5 class="card-title">{char.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

