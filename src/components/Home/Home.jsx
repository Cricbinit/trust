import React from 'react'
import Navbar from '../Navbar'
import HeroSlider from '../HeroSlider'
import AboutFoundation from './AboutFoundation'
import Foundationfact from './Foundationfact'
import TeamFoundation from './TeamFoundation'
import ProfileSection from './ProfileSection'
import EducationHome from './EducationHome'
import HealthCareHome from './HealthCareHome'
import Footer from '../Footer/Footer'
import "../../index.css"

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <AboutFoundation/>
        <Foundationfact/>
        <TeamFoundation/>
        <ProfileSection/>
        <EducationHome/>
        <HealthCareHome/>
        <Footer/>
    </div>
  )
}

export default Home