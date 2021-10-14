import React, {useEffect, useState}  from 'react'
import {API_KEY,imageUrl} from '../../components/constant/constant'
import axios from '../../axios'
import "./Banner.css"

function Banner() {
    const [Movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
            console.log(responce.data.results[0])
            setMovie(responce.data.results[0])
        })
    }, [])
    return (
        <div 
        style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{Movie ? Movie.name : ""} </h1>
                <div className='banner buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>MyList</button>
                    <h1 className='discription'>{Movie ? Movie.overview : ""} </h1>
                </div>
            </div> 
        <div className="fade"> </div>           
        </div>
    )
}

export default Banner
