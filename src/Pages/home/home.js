import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import './home.scss'
import Card from '../../Components/Card/card';
import Error404 from '../error/error404';
import { Loading } from '../../Components/Loading/loading';
import { Row } from 'reactstrap';

export const Home = () => {

//private= b24bd34c4a885bb06ff7809c6f94727f846f05bb
  //public= c7236624677c7d3097f557be598c137d
  //ts=1

  //1b24bd34c4a885bb06ff7809c6f94727f846f05bbc7236624677c7d3097f557be598c137d

  //hash: 54f278ba06198f1d1b9b479cd9752541

  const [character, setcharacter] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c7236624677c7d3097f557be598c137d&hash=54f278ba06198f1d1b9b479cd9752541')
      .then(res=>{
        setcharacter(res.data.data.results);
        console.log(res.data)
        setloader(!loader);
      }).catch(error=>console.log(error))
  },[])

  console.log("CHARACTERS",character)

  return (
    <div>
      {!loader ? 
        <Loading/> 
        : 
        <div>
          <div className='title-marvel'>
         <img className='title-marvel-img' src='https://assets.stickpng.com/images/585f9333cb11b227491c3581.png'></img>
         </div>
          <div className='content'>
            <Card data={character}/>
          </div>
        </div>
      }
    </div>
  );
}

