import axios from 'axios';
import {useEffect} from 'react'

function Bing() {

useEffect(() => {
    axios.get("http://api.mediastack.com/v1/news?access_key=c19240f9190c455530d05c595e101893&sources=cnn,bbc")
    .then((reponse)=>{
    console.log(reponse.data)
    })
}, []);


  return (
    
    <div></div>
  )
}

export default Bing