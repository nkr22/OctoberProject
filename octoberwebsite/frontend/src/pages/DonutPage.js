import React, {useState, useEffect} from 'react'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const DonutPage = ({match}) => {

    let donutId = match.params.id
    let [donut, setDonut] = useState(null)

    useEffect(() => {
        getDonut()
    },[donutId])

    let getDonut = async () => {
        let response = await fetch(`/api/donut/${donutId}`)
        let data = await response.json()
        setDonut(data)
    }

    return (
        <div className='donut'>
            <div className='donut-header'>
                <h3>
                    <a href='/'>
                        <ArrowLeft/>
                    </a>
                </h3>
            </div>
            <img className='donut-image' src={`${donut?.url}`}/>
        </div>
    )
}

export default DonutPage