import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {API_KEY, imageUrl} from '../constant/constant'
import './RawPost.css'

function Rawpost(props) {
    const [Movie, setMovie] = useState([])
    const [idurl,setIdurl]=useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)  
            setMovie(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setIdurl(response.data.results[0])
            }
        })
      }
    return (
        <div className='raw'>
            <div className="poster">
                <h2>{props.title}</h2>
                {Movie.map((obj)=>

                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small_poster':'posters'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            { idurl &&  <Youtube opts={opts} videoId={idurl.key}/> }
            </div>
        </div>
    )
}

export default Rawpost
