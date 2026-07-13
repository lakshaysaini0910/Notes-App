import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ title, desc, ondelete}) => {
    return (
        <div className='card '>
            <div className="title">{title}  </div>
            <div className="desc">{desc}</div>
            <div className='del' onClick={ondelete}><MdDeleteOutline /> </div>

        </div>
    )
}

export default Card