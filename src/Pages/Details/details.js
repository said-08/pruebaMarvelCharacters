import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row } from 'reactstrap';
import Card from '../../Components/Card/card';
import "./detail.scss";

const Details = () => {
    const {id}=useParams();
    console.log(id)
    const [item, setitem] = useState();
    const [series, setSeries] = useState([]);
    const [comics, setComics] = useState([]);

    const fetch= async()=>{
        const resp = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=c7236624677c7d3097f557be598c137d&hash=54f278ba06198f1d1b9b479cd9752541`);
        setitem(resp.data.data.results[0]);
    };

    const seriesFetch = async() => {
        const resp = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=1&apikey=c7236624677c7d3097f557be598c137d&hash=54f278ba06198f1d1b9b479cd9752541`);
        setSeries(resp.data.data.results)
    }

    const comicsFetch = async() => {
        const resp = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=c7236624677c7d3097f557be598c137d&hash=54f278ba06198f1d1b9b479cd9752541`);
        setComics(resp.data.data.results)
    }


    useEffect(() => {
        fetch();
        seriesFetch();
        comicsFetch();
    },[]);

  return (
    <div>
        {
            (!item)? null :(
                    <><div>
                        <h1 className='name-title'>{item.name}</h1>
                        
                    </div>
                <div className='box-content'>
                    {/* <div className='rigt-box'> */}
                        <img className='imagen-big' src={`${item.thumbnail.path}.${item.thumbnail.extension}`}></img>
                    {/* </div> */}
                    <div className='definition'>
                        <p>{item.description === "" ? "No description Available" : item.description}</p>
                    </div>
                    <div className='series-detail' >
                    <div style={{backgroundColor: 'gray',width: '900px', height: '3px', marginBottom: '20px'}} ></div>
                        <h1>Series:</h1>
                        <div className='card-detail'>
                            {series.map((item, i) => {
                                return(
                                    <div className="card" key={i}>
                                        <img
                                            className="card-img"
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                            alt=""
                                        />
                                        <div>
                                            <h3 className="title">{item.title}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>      
                    </div>
                    <div className='series-detail'>
                    <div style={{backgroundColor: 'gray', width: '900px', height: '3px', marginBottom: '20px', marginTop: '20px'}} ></div>
                        <h1>Comics:</h1>
                        <div className='card-detail'>
                            {comics.map((item, i) => {
                                return(
                                    <div className="card" key={i}>
                                        <img
                                            className="card-img"
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                            alt=""
                                        />
                                        <div>
                                            <h3 className="title">{item.title}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>
                </div>
                </>
            )
        }
    </div>
  )
}

export default Details
