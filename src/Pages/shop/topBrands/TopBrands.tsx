import { carPlus } from '../../../assets/icons'
import './topBrands.scss'
import NextArrow from '../../../components/carousel/NextArrow'

const topBrandsList = [
  {
    id: 1,
    name: 'KFC',
    img: carPlus
  },
  {
    id: 2,
    name: 'KFC',
    img: carPlus
  },
  {
    id: 3,
    name: 'KFC',
    img: carPlus
  },
  {
    id: 4,
    name: 'KFC',
    img: carPlus
  }
]


const TopBrands = () => {
  return (<>
    <div className='top-brands max-width'>
      <div className='collection-title'>
        Top brands for you
      </div>

      <div className='top-brands-wrapper'>
        {topBrandsList?.map((brand) => {
          return <div className='top-brands-cover' key={brand.id}>
            <div>

              <img
                src="https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp"
                alt={brand.name}
                className='top-brands-image'
              />
            </div>
          </div>
        })}
      </div>

    </div>
  </>

  )
}

export default TopBrands