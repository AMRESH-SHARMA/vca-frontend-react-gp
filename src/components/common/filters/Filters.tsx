import FilterItem from './filterItem/FilterItem'
import './filters.scss'

const Filters: React.FC<{ filterList: any[] }> = ({ filterList }) => {

    return (<>
        <div className='filters'>
            {filterList && filterList.map((filter: any) => {
                return <FilterItem filter={filter} key={filter.id} />
            })}
        </div></>
    )
}

export default Filters