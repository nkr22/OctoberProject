import React from "react"
import { Link } from 'react-router-dom'

const ListItem = ({donut}) => {
    return(
            <div className="donut-list-item">
                <Link to={`donut/${donut.id}`}>
                    {donut.description}
                </Link>
            </div>       
    )
}

export default ListItem