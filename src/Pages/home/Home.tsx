import { useState } from 'react'
import Footer from '../../components/common/footer/Footer'
import Header from '../../components/common/header/Header'
import TabOptions from '../../components/common/tabOptions/TabOptions'
import Shop from '../shop/Shop'
import Login from '../contact/Contact'
import AboutUs from '../../components/aboutUS/AboutUs'


const Home = () => {

  const [activeTab, setActiveTab] = useState<string>('Shop');

  const getCorrectScreen = (tab: string) => {
    switch (tab) {
      case "Shop":
        return <Shop />
      case "Book":
        return <Login/>
      case "Config":
        return <AboutUs />
      default:
        return <Shop />
    }
  }

  return (<>

    <Header />
    <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
    {getCorrectScreen(activeTab)}
    <Footer />
  </>
  )
}



export default Home