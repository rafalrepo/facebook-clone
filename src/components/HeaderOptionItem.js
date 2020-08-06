import React from 'react';
import '../css/headerOptionItem.css'

const HeaderOptionItem = ({ icon, svg }) => {
    
    return(
        <button className="headerOptionItem" >
            {svg ? <div className="headerOptionItem__iconSvg" dangerouslySetInnerHTML={{__html: svg}} /> : '' }
            {icon ? <div className="headerOptionItem__iconFa" dangerouslySetInnerHTML={{__html: icon}} /> : '' }
        </button>
    )
}

export default HeaderOptionItem;