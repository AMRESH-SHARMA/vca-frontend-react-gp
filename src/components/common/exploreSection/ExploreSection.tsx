import './exploreSection.scss'
import ExploreCard from './exploreCard/ExploreCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../loader/Loader';

const PAGE_NUMBER = 1;

interface CarItemProps {
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

const NUMBERS_PER_PAGE = 100;

const ExploreSection: React.FC<ExploreSectionProps> = ({ segId, manuId }) => {

  const [carsData, setCarsData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(PAGE_NUMBER);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/users?offset=${page}&limit=6`
      );
      setCarsData((prev) => {
        return [...prev, ...res.data.users];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

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
          {carsData?.map((car, index) => (
            <div key={index}>
              <ExploreCard name="n" price={123} safetyRating={6} fuelType={"di"} imageUrl={"xy"} />
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