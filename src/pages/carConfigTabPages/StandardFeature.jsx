import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './carDetails.scss'
import Options from '../../components/common/options/Options';

// interface ModelData {
//     id: number,
//     image_path: string,
//     minQty: number,
//     modName: string,
//     name: string,
//     price: number,
//     safetyRating: number,
//     createdAt: string,
//     updatedAt: string
// }

// interface CompDataItem {
//     comp_id: number;
//     comp_name: string;
//     comp_type: string;
//     is_configurable: string;
// }

const StandardFeature = () => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [modelData, setModelData] = useState()
    const [compDataS, setCompDataS] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            (async () => {
                let ress = await axios.get(`/vehicles/S/${id}`)
                console.log('s', ress.data.data)
                const filteredData = await ress.data.data.filter((item) => item.is_configurable == 'Y');

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

    const handleOptionClick = (optionId) => {
        (async () => {
            try {
                let res = await axios.get(`/alternate_components/${id}/${optionId}`)
                console.log(res.data.data)
                setOptions(res.data.data)
            } catch (e) {
                console.log(e)
            }
            console.log('am', id," ",optionId)
        })()

    };

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
                                        <select value={""} onClick={() => handleOptionClick(item.comp_id)} >

                                             {options.map((option, index) => (
                                                <Options key={index} comp_name={option.comp_name} alt_comp_id={option.alt_comp_id}/>
                                            ))} 

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


