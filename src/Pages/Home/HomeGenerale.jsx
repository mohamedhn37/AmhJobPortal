import React from 'react'
import HomeHead from '../../Sections/HomeHead/HomeHead';
import Process from '../../Sections/Process/Process';
import Video from '../../Sections/Video/Video';
import Recruteur from '../../Sections/Recruteur/Recruteur';
import Partner from '../../Sections/Partner/Partner';


const HomeGenerale = () => {
  return (
    <>
        <HomeHead/>
        <Process/>
        <Video/>
        <Recruteur/>
        <Partner/>
    </>
  )
}

export default HomeGenerale