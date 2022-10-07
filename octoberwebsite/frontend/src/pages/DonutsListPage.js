import React, {useState, useEffect} from "react"
import ListItem from "../components/ListItem"
import {ReactComponent as DonutIcon} from "../assets/donut.svg"


const DonutsListPage = () => {

    let [donuts, setDonuts ] = useState([])

    useEffect(()=>{
        getDonuts()
    }, [])

    let getDonuts = async () =>{
        let response = await fetch('/api/donuts/')
        let data = await response.json() 
        console.log(data)
        setDonuts(data)
    }

    return (
        <div className="donut">
            <div className="donut-header">
                <h3 className="donut-title"><DonutIcon/> Donuts</h3>
                <p className="donut-count">{donuts.length} Donuts</p>
            </div>
            <div className="donuts-list">
                {donuts.map((donut, index) =>(
                    <ListItem key={index} donut={donut}/>
                ))}
            </div>
        </div>
    )
}

export default DonutsListPage