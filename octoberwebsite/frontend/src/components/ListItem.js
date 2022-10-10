import React from "react"
import { Link } from 'react-router-dom'

const ListItem = ({donut}) => {
    return(
            <div className="donut-list-item">
                <Link to={`donut/${donut.id}`}>
                    {donut.description}
                </Link>
                <div className="donut-price">
                    ${(Math.round(donut.price * 100) / 100).toFixed(2)}
                </div>
            </div>       
    )
}

export default ListItem