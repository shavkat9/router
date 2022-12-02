import React from 'react'
import Bigimg from '../../assets/img/bigimg.png';
import {Link } from 'react-router-dom';


function HomePages() {
  return (
    <div className='Home__section'>
        <div className="home__line" style={{backgroundImage: `url(${Bigimg})`}}>
          {/* <h1>jjjjjjjjjjjjjjjjjjj</h1> */}
          {/* <Link to='/abaya'> */}
          
          {/* <button>Press</button> */}
          {/* </Link> */}
        </div>
    </div>
  )
}

export default HomePages;