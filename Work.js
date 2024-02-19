import React from 'react'
import "./Work.css"
import Profiloi1 from '../Profiloi Website/Profiloi1.jpg'
import Profiloi2 from '../Profiloi Website/Profiloi2.jpg'
import Profiloi3 from '../Profiloi Website/Profiloi3.jpg'
import Profiloi4 from '../Profiloi Website/Profiloi4.jpg'
import Profiloi5 from '../Profiloi Website/Profiloi5.jpg'
import Profiloi6 from '../Profiloi Website/Profiloi6.jpg'


const Work = () => {
  return (
    <section id='Works'>
        <h2 className='Workstitle'>My Profiloi</h2>
        <span className='WorksDesc'>I mfckjvnsndvj knjsvd knklnc nkvsnm oknd </span>
        <div className='WorksImgs'>
        <img src={Profiloi1} alt='Profiloi1' className='workImg'></img>
        <img src={Profiloi2} alt='Profiloi2' className='workImg'></img>
        <img src={Profiloi3} alt='Profiloi3' className='workImg'></img>
        <img src={Profiloi4} alt='Profiloi4' className='workImg'></img>
        <img src={Profiloi5} alt='Profiloi5' className='workImg'></img>
        <img src={Profiloi6} alt='Profiloi6' className='workImg'></img>

        </div>
        <button className='workBtn'>See More</button>
        
    </section>
  )
}

export default Work;