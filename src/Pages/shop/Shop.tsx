import Filters from "../../components/common/filters/Filters"

const shopFilters: any[]  = [
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
  return (<div className='max-width'>
    <Filters filterList={shopFilters} />
    This is shop
  </div>
  )
}

export default Shop