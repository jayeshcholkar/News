import axios from 'axios';
import {useEffect} from 'react'

function Bing() {

useEffect(() => {
    axios.get('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=9da348c2e4af82c075b369ba1c840b03')
    .then((articles)=>{
    console.log(articles)
    })
}, []);


  return (
    
    <div></div>
  )
}

export default Bing