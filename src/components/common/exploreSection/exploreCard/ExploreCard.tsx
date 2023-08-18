import './exploreCard.scss'
import {p} from '../../../../assets/images/index'

const ExploreCard = () => {
  return (
    <div className='explore-card cur-po'>
      <div className='explore-card-cover'>
        <img src={p} alt="nname" className='explore-card-image' />
        <div className='delivery-time'>delivery time</div>
        {true && <div className='pro-off'>proff</div>}
        {true && <div className='gold-off absolute-center'>gold</div>}
        {true && <div className='discount absolute-center'>discount</div>}
      </div>
      <div className='res-row'>
        <div className='res-name'>TATA SAFARI X09</div>
        <div className='res-rating absolute-center'><i className='fi fi-rr start absolute-center'>+</i></div>
      </div>

      <div className='res-row'>
        <div className='res-detail'>
          <span className='res-detail-tag'>details of cars</span>
          <span className='res-detail-tag'>details of cars</span>
        </div>
      </div>

      <div>
        <div className='card-separator'>
        </div>

        <div className='card-button-cover'>
          <button className='card-btn'>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ExploreCard