import React from 'react'
import Header from './components/Header'
import ModelY from './pages/ModelY'
import ModelSX from './pages/ModelSX'
import SolarType from './pages/SolarType'
import Accessories from './pages/Accessories'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header url="url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD')" />
      <ModelY url="url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop')" id='modelY'/>
      <ModelSX url="url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop')" model='Model S' id='modelS'/>
      <ModelSX url="url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD')" model='Model X' id='modelX'/>
      
      <SolarType url="url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D')" solarType="Solar Panels" moto="Schedule a Virtual Consultation" id='solarPanel' />

      <SolarType url="url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global')" solarType="Solar Roof" moto="Produce Clean Energy From Your Roof" id='solarRoof'/>
      <Accessories/>
      <Footer/>
    </div>
  )
}

export default App
