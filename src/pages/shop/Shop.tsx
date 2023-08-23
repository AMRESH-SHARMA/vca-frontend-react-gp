import ExploreSection from '../../components/common/exploreSection/exploreSection/ExploreSection'
import ExploreDefaultSection from '../../components/common/exploreSection/exploreDefaultSection/ExploreDefaultSection'
import Filter from '../../components/common/filter/Filter'
import { useEffect, useState } from 'react'
import axios from 'axios'


interface Segment {
  id: number
  name: string
}

interface Manufacturer {
  id: number
  name: string
}


const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);

  const [clickedSegId, setClickedSegId] = useState<number>(0);
  const [clickedManuId, setClickedManuId] = useState<number>(0);

  const handleSegmentClicked = (id: number) => {
    // console.log("clicked seg with ID:", id)
    setClickedSegId(id);
    (async () => {
      try {
        const res = await axios.get(`/manufacturers/${id}`)
        // console.log(res.data)
        setManufacturers(res.data.data);
      } catch (e) {
        console.warn(e)
      }
    })()
  };

  const handleManufacturerClicked = (id: number) => {
    // console.log("clicked manu with ID:", id);
    setClickedManuId(id);
    (async () => {
      try {
        const res = await axios.get(`/models/${clickedSegId}/${id}`)
        // setModels(res.data.data);
      } catch (e) {
        console.warn(e)
      }
    })()
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/segments`)
        setSegments(res.data.data);
        setLoading(false)
      } catch (e) {
        setLoading(false)
        console.warn(e)
      }
    })()
  }, [])


  return (<>
    <div className='max-width'>
      <div className='filters'>

        <Filter data={segments} title={'Segment'} onItemClick={handleSegmentClicked} />

        <Filter data={manufacturers} title={'Manufacturer'} onItemClick={handleManufacturerClicked} />

      </div>
    </div>
    {!clickedManuId ?
      <>
        <ExploreDefaultSection />
      </>
      : <>
        <ExploreSection segId={clickedSegId} manuId={clickedManuId} />
      </>}

  </>
  )
}

export default Shop