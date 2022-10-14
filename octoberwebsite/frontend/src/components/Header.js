import React from "react"
import {ReactComponent as DonutIcon} from "../assets/donut.svg"

const Header = () => {
    return(
        <div className="app-header">
            
            <a href='/'><h1 style={{float:'left', color:'black'}}>Donut Menu</h1></a>
            <a href='/' >
                <DonutIcon style={{width: 'auto', height: '30px', float:'left'}}></DonutIcon>
            </a>
        </div>
    )
}

export default Header