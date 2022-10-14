import React from "react"
import { Link } from 'react-router-dom'

const ListItem = ({donut}) => {
    return(
            <div class="col-lg-4 col-md-4 content" >
                <article class="post-grid mb-5">
                <Link to={`donut/${donut.id}`}>
                    <img src={`${donut?.url}`} alt="image of donut" class="img-fluid" style={{width:'auto'}}/>
                </Link>
                <Link to={`donut/${donut.id}`} style={{ textDecoration: 'none', color: "lightsalmon"}}>
                    <h3 class="post-title mt-1">{donut.description}</h3>
                </Link>
                <span class="text-muted letter-spacing text-uppercase font-sm">${(Math.round(donut.price * 100) / 100).toFixed(2)}</span>
                
                </article>
            </div> 
  
    )
}

export default ListItem