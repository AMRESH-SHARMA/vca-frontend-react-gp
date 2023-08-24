import './exploreCard.scss'
import { p } from '../../../../assets/images/index'

interface CarItemProps {
  name: string;
  minQty: number;
  price: number;
  safetyRating: number;
  fuelType: string;
  imageUrl: string;

}

const ExploreCard: React.FC<CarItemProps> = ({ name, price, safetyRating, fuelType, minQty
  , imageUrl }) => {
  return (
    <div className='explore-card cur-po'>
      <div className='explore-card-cover'>
        <img src={imageUrl} alt="nname" className='explore-card-image' />
        {/* <div className='fuel-type'>PETROL</div> */}
        {/* {true && <div className='pro-off'>proff</div>} */}
        {/* {true && <div className='gold-off absolute-center'></div>} */}
        <div className='discount absolute-center'>Petrol</div>
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        <div className={`res-rating ${safetyRating <= 4 ? 'res-rating-red' : 'res-rating-green'}`}><p>Safety: {safetyRating}</p></div>
      </div>

      <div className='res-row'>
        <div className='res-detail'>
          <span className='res-detail-tag'>₹ {price}</span>
          <span className='res-detail-tag'>Min Quantity: {minQty}</span>
        </div>
      </div>

      <div>
        <div className='card-separator'>
        </div>

        <div className='card-button-cover'>
          <button className='card-btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ExploreCard