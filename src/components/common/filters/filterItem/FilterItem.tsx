import './filterItem.scss'

const filterItem : React.FC<{ filter: any }>= ({filter}) => {
  return (
    <div className='filter-item cur-po'>
    {filter.icon && filter.icon}
    <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default filterItem