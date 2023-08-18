import ExploreSection from '../../components/common/exploreSection/ExploreSection'
// import Filters from "../../components/common/filters/Filters"
import TopBrands from './topBrands/TopBrands'
import Filter from '../../components/common/filter/Filter'

const seg = [{ id: 0, label: 'All' }, { id: 1, label: 'SUV' }]

const man = [{ id: 0, label: 'All' }, { id: 1, label: 'TAVA' }]

const mod = [{ id: 0, label: 'All' }, { id: 1, label: 'NEXON' }]

const Shop = () => {
  return (<>
    <div className='max-width'>
      <div className='filters'>

        <Filter data={seg} title={'Segment'} />

        <Filter data={man} title={'Manufacturer'} />

        <Filter data={mod} title={'Model'} />
      </div>
    </div>
    <TopBrands />
    <ExploreSection />
  </>
  )
}

export default Shop