import React from 'react'

const Options = (option) => {
    return (<>
    
        <option key={option.alt_comp_id} value={option.alt_comp_id}>
            {option.comp_name}
        </option>
    </>
    )
}

export default Options
