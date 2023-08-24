import { useState } from 'react'
import Footer from '../../components/common/footer/Footer'
import TabOptions from '../../components/common/tabOptions/TabOptions'
import Shop from '../shop/Shop'
import Login from '../contact/Contact'
import ConfigCar from '../configCar/ConfigCar'
import Navbar from '../../components/common/navbar/Navbar'

const Home = () => {

  const [activeTab, setActiveTab] = useState<string>('Shop');

  const getCorrectScreen = (tab: string) => {
    switch (tab) {
      case "Shop":
        return <Shop />
      case "Book":
        return <Login/>
      case "Config":
        return <ConfigCar />
      default:
        return <Shop />
    }
  }

  return (<>
    <Navbar />
    <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
    {getCorrectScreen(activeTab)}
    <Footer />
  </>
  )
}



export default Home