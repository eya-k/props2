import React from 'react' ;
import Moviecard from './Moviecard' ;

const Movielist = ({moviesData}) => {
console.log(moviesData)

  return (
    <div className='container'>
        {moviesData.map((Element)=>(<Moviecard Movielement={Element}/>))}
       
       
       </div>
  )
}

export default Movielist