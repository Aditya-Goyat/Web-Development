import React from "react";
import Tilt from 'react-parallax-tilt'
import brain from './brain.png'

const Logo = () => {

    return (
        < div className= "ma4 mt0" style={{ display: 'flex', justifyContent: 'center'}} >
            < Tilt style={{ height: '100px', width: '150px', display: 'flex', justifyContent: 'center', background: 'linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)'}} tiltReverse= {true}>
                < img className='pa3' alt='brain' src= { brain }  />
            </ Tilt >
        </ div >
    )

}

export default Logo;