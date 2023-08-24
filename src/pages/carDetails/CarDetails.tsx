import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './carDetails.scss'

interface ModelData {
    id: number,
    image_path: string,
    minQty: number,
    modName: string,
    name: string,
    price: number,
    safetyRating: number,
    createdAt: string,
    updatedAt: string
}

const CarDetails = () => {

    let { id } = useParams();
    const [modelData, setModelData] = useState<ModelData>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            (async () => {
                let res = await axios.get(`/vehicles/${id}`)
                console.log(res.data.data)
                setModelData(res.data.data.model)
            })()
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }

    }, [])

    return (<>
        {!loading ?
            <>
                <div className="details-wrapper">
                    <div className="details-info">
                        <h5>Standard Feature</h5>
                        <ol>
                            <li>+ Head north on N Halsted St</li>
                            <li>Turn right on W Diversey Pkwy</li>
                            <li>Turn left on N Orchard St</li>
                        </ol>

                        <h5>Standard Feature</h5>
                        <ol>
                            <li>Head north on N Halsted St</li>
                            <li>Turn right on W Diversey Pkwy</li>
                            <li>Turn left on N Orchard St</li>
                        </ol>

                        <h5>Standard Feature</h5>
                        <ol>
                            <li>Head north on N Halsted St</li>
                            <li>Turn right on W Diversey Pkwy</li>
                            <li>Turn left on N Orchard St</li>
                        </ol>
                    </div>

                    <div className="image-wrapper">
                        <div className='image-wrapper-child'>
                            <h1>{modelData?.modName}</h1>
                            <img
                                className="details-car-img"
                                src={modelData?.image_path}
                                alt="image"
                                height={300}
                                width={500}
                            />
                        </div>
                        <p>Price: {modelData?.price}</p>
                        <p>safetyRating: {modelData?.safetyRating}</p>

                    </div>

                    <div className="btn-panel">
                        <button>confirm</button>
                        <button>confirm</button>
                        <button>confirm</button>
                    </div>
                </div>
            </>
            : <>

            </>}



    </>
    )
}

export default CarDetails