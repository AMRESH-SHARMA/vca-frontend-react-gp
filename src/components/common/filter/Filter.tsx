import { useState } from 'react';
import './filter.scss'


interface FilterItemProps {
  data: Array<{ id: number; label?: string;}>;
  title: string;
}


const filterItem: React.FC<FilterItemProps> = ({ data, title }) => {

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id: number) => {
    setSelectedItem(prevSelectedItem => (prevSelectedItem === id ? null : id));
    console.warn(id + " "+ title)
  };

  return (<>

  <div className='dropdown '>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id === selectedItem)?.label : title}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={() => handleItemClick(item.id)} key={item.id}>
            <span className={`dropdown-item-dot ${item.id === selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </>

  )
}

export default filterItem