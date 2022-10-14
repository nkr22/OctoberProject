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
    

        <div >
            <div className="donut-header" style={{borderBottom: '1px solid black'}}>
                <h3 className="donut-title"><DonutIcon/> Donuts</h3>
                <p className="donut-count">{donuts.length} Donuts</p>
            </div>
            <div class="row" style={{padding: '20px'}}>
                {donuts.map((donut, index) =>(
                    <ListItem key={index} donut={donut}/>
                ))}
            </div>
        </div>
    )
}

export default DonutsListPage