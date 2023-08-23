import '../exploreSection.scss'
import ExploreCard from '../exploreCard/ExploreCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../loader/Loader';

const PAGE_NUMBER = 0;

interface CarApi {
  id: number;
  name: string;
  price: number;
  safetyRating: number;
  fuelType: string;
  imageUrl: string;
}

interface ExploreSectionProps {
  segId: number;
  manuId: number;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ segId, manuId }) => {

  const [carsData, setCarsData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(PAGE_NUMBER);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setPage(0)
    console.log("id changed", segId," ", manuId)
  }, [segId, manuId])
  
  useEffect(() => {
    setTimeout(async () => {
      // const res = await axios.get(`https://api.slingacademy.com/v1/sample-data/users?offset=${page}&limit=6`);
      let res: { data: { data: { models: CarApi[] } } };

      res = await axios.get(`/models/${segId}/${manuId}?page=${page}`)
      console.log('d', res)
      setCarsData((prev) => {
        return [ ...res.data.data.models, ...prev];
      });

    setLoading(false);
  }, 500);
}, [page, manuId]);




useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScroll = async () => {
  if (
    window.innerHeight + document.documentElement.scrollTop + 1 >=
    document.documentElement.scrollHeight
  ) {
    setLoading(true);
    setPage((prev) => prev + 1);
  }
};

return (<>

  < div className='max-width explore-section' >
    <div className='collection-title'>Explore fleet from multiple dealers</div>
    <div className='explore-grid'>

      {carsData.length == 0 ? <Loader /> : <>
        {carsData?.map((c, index) => (
          <div key={index}>
            <ExploreCard name={c.modName} price={c.price} safetyRating={c.safetyRating} fuelType={c.fuelType} imageUrl={c.image_path} />
          </div>
        ))}
        {loading && <Loader />}
      </>}


    </div>

  </div >
</>
)
}

export default ExploreSection