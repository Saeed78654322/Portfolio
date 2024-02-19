import React from 'react';
import './Client.css';
import Logo1 from "../../Profiloi Website/Logo1.png";
import Logo2 from "../../Profiloi Website/Logo2.png";
import Logo3 from "../../Profiloi Website/Logo3.png";


const Client = () => {
  return (
    <section id='clientsection'>

            <h2 className='clienttiteer'>My Client</h2>
            <span className='clientDresc'>Quick services are offered with skillful coordination and management, while finishing projects by professionals who are best in their craft and possess a wealth of knowledge.</span>
            <div className='clientlogos'>
            <img src={Logo1} alt='Logo1' className='clientlogo'></img>
            <img src={Logo2} alt='Logo2' className='clientlogo'></img>
            <img src={Logo3} alt='Logo3' className='clientlogo'></img>

            </div>
        

    </section>
  )
}

export default Client;