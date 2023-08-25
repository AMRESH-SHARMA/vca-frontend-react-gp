import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

interface CompDataItem {
    comp_id: number;
    comp_name: string;
    comp_type: string;
    is_configurable: string;
}

const StandardFeature = () => {

    let navigate = useNavigate();

    const { id } = useParams();
    const [modelData, setModelData] = useState<ModelData>()
    const [compDataS, setCompDataS] = useState<CompDataItem[]>([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            (async () => {
                let ress = await axios.get(`/vehicles/S/${id}`)
                console.log('c', ress.data.data)
                const filteredData = await ress.data.data.filter((item: CompDataItem) => item.is_configurable == 'Y');

                console.log(filteredData)
                setCompDataS(filteredData)
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
                                {compDataS.map((item, index) => (<>
                                    <div key={index}>
                                        <label className="label">{item.comp_name}</label>
                                        <select
                                            value={""}
                                        >
                                            <option value="">Standard</option>
                                            <option value="">Standard</option>
                                        </select>
                                    </div></>

                                ))}
                            </ol>
                        </div>
                        <div className="btn-panel">
                            <button className='button'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </>
            : <>

            </>}



    </>
    )
}

export default StandardFeature


