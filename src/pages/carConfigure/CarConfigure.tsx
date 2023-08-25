import { useEffect, useState } from 'react';
import './carConfigure.scss'
import ConfigTabOptions from '../../components/common/configTabOptions/ConfigTabOptions';
import StandardFeature from '../carConfigTabPages/StandardFeature';
import CoreFeature from '../carConfigTabPages/CoreFeature';
import InteriorFeature from '../carConfigTabPages/InteriorFeature';
import ExteriorFeature from '../carConfigTabPages/ExteriorFeature';
import Navbar from '../../components/common/navbar/Navbar';

const CarConfigure = () => {

    const [activeTab, setActiveTab] = useState<string>('S');

    const getCorrectScreen = (tab: string) => {
      switch (tab) {
        case "S":
          return <StandardFeature />
        case "C":
          return <CoreFeature />
        case "I":
          return <InteriorFeature />
          case "E":
            return <ExteriorFeature />
        default:
          return <></>
      }
    }
  
    return (<>
    <Navbar/>
    <ConfigTabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
    {getCorrectScreen(activeTab)}
    </>
    )
}

export default CarConfigure