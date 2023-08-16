import './exploreSection.scss'
import ExploreCard from './exploreCard/ExploreCard'

const list=[]
const ExploreSection = () => {
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>Explore fleet from multiple dealers</div>
      <div className='explore-grid'>
        {/* {list.map((item)=>{
            return <ExploreCard />
        })} */}
        <ExploreCard />
      </div>

    </div>
  )
}

export default ExploreSection