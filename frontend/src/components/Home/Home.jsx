import React from 'react'
import Carrusel from './Carrusel'
import SectionInfo from './SectionInfo'
import SectionReq from './SectionReq'
import SectionTips from './SectionTips'

function Home() {
    return (
        <div>
            
            <Carrusel/>
            <SectionTips/>
            <SectionReq/>
            <SectionInfo/>
            
        </div>
    )
}

export default Home
