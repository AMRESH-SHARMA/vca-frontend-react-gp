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

interface DataItem {
    id: number;
    value1: string;
    description: string;
}

interface NestedData {
    data: DataItem[][];
}

const CarDetails = () => {

    let { id } = useParams();
    const [modelData, setModelData] = useState<ModelData>()
    const [compDataS, setCompDataS] = useState([])
    const [compDataC, setCompDataC] = useState([])
    const [compDataI, setCompDataE] = useState([])
    const [compDataE, setCompDataI] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            (async () => {
                let ress = await axios.get(`/vehicles/S/${id}`)
                let resc = await axios.get(`/vehicles/C/${id}`)
                let resi = await axios.get(`/vehicles/I/${id}`)
                let rese = await axios.get(`/vehicles/E/${id}`)
                // console.log('c', res.data.data)
                setCompDataS(ress.data.data)
                setCompDataC(resc.data.data)
                setCompDataI(resi.data.data)
                setCompDataE(rese.data.data)
            })()
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }

        try {
            (async () => {
                let res = await axios.get(`/models/${id}`)
                setModelData(res.data.data.models)
            })()
        } catch (e) {
            console.log(e)
        } finally {
            // setLoading(false)
        }

    }, [])

    return (<>
        {!loading ?
            <>
                <div className="details-wrapper">
                    <div className="details-info">
                        <div className='details-info-body'>
                            <h5>Standard Feature</h5>
                            <ol>
                                {compDataS.map((item, index) => (
                                    <li key={index}>{item[2]}</li>
                                ))}
                            </ol>
                        </div>

                        <div className='details-info-body'>
                            <h5>Core Feature</h5>
                            <ol>
                                {compDataC.map((item, index) => (
                                    <li key={index}>{item[2]}</li>
                                ))}
                            </ol>
                        </div>

                        <div className='details-info-body'>
                            <h5>Interior Feature</h5>
                            <ol>
                                {compDataI.map((item, index) => (
                                    <li key={index}>{item[2]}</li>
                                ))}
                            </ol>
                        </div>

                        <div className='details-info-body'>
                            <h5>Exterior Feature</h5>
                            <ol>
                                {compDataE.map((item, index) => (
                                    <li key={index}>{item[2]}</li>
                                ))}
                            </ol>
                        </div>

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