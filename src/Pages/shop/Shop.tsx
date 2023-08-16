import ExploreSection from "../../components/common/exploreSection/ExploreSection"
import Filters from "../../components/common/filters/Filters"
import TopBrands from "./topBrands/TopBrands"

const shopFilters: any[] = [
  {
    id: 1,
    icon: <i className='absolute-center fa fa-filter'></i>,
    title: 'Filters'
  },
  {
    id: 2,
    title: 'Rating: 4.0+'
  },
  {
    id: 3,
    title: 'Great offers'
  }
]

const Shop = () => {
  return (<>
    <div className='max-width'>
      <Filters filterList={shopFilters} />
    </div>
    <TopBrands />
    <ExploreSection/>
  </>
  )
}

export default Shop