import '../exploreSection.scss'
import ExploreCard from '../exploreCard/ExploreCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../../loader/Loader';
import { useNavigate } from 'react-router-dom';

const PAGE_NUMBER = 0;

interface CarApi {
  id: number;
  minQty: number;
  name: string;
  price: number;
  safetyRating: number;
  fuelType: string;
  imageUrl: string;
}

const ExploreDefaultSection = () => {

  let navigate = useNavigate()
  const [carsData, setCarsData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(PAGE_NUMBER);
  const [loading, setLoading] = useState<boolean>(false);


  // useEffect(() => {

  //   try {
  //     setTimeout(async () => {
  //       let res: { data: { data: { models: CarApi[] } } };

  //       res = await axios.get(`/models?page=${page}`)
  //       console.log('d', res)
  //       setCarsData((prev) => {
  //         return [...prev, ...res.data.data.models];
  //       });

  //       setLoading(false);
  //     }, 500);
  //   } catch (e) {
  //     console.warn(e);     
  //   }

  // }, [page]);

  useEffect(() => {
    // Wrap the asynchronous code inside a function to handle errors
    const fetchData = async () => {
      try {
        const res = await axios.get(`/models?page=${page}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          }
        })
        console.log('Data:', res.data);

        setCarsData((prev) => {
          return [...prev, ...res.data.data.models];
        });

        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        // You might want to set an error state or display an error message here
      }
    };

    // Call the fetchData function after a 500ms delay
    const timerId = setTimeout(fetchData, 500);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timerId);

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
          {carsData?.map((c, index) => (
            <div key={index} onClick={() => { navigate(`/car-details/${c.id}`) }}>
              <ExploreCard name={c.modName} price={c.price} safetyRating={c.safetyRating} fuelType={c.fuelType} imageUrl={c.image_path} minQty={c.minQty}
              />
            </div>
          ))}
          {loading && <Loader />}
        </>}


      </div>

    </div >
  </>
  )
}

export default ExploreDefaultSection