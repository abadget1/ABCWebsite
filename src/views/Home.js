import HomeHeader from 'components/Headers/HomeHeader';
import HomeNavbar from 'components/Navbars/HomeNavbar';
import Featured from './SectionsSections/Featured.js'

import React from 'react'

const Home = () => {
  return (
    // Navbar START
    <div>
    <HomeNavbar />
     {/* Navbar End */}
    <HomeHeader />
    {/* Featured  */}
    <Featured />

    </div>
  )
}

export default Home;