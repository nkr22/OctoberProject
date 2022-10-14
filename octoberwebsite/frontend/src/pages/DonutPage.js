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
            <div className='donut-header' style={{borderBottom: '1px solid black'}}>
                <h3>
                    <a href='/' className="donut-title" >
                        <ArrowLeft/>
                    </a>
                </h3>
                
                <p className="donut-count" style={{fontSize:'40px', color:'lightsalmon'}}>{donut?.description}</p>
            </div>
            <div className="row section-padding">
                <img className='img-fluid col-lg-6 col-md-4' style={{width:'auto', height:'auto'}} src={`${donut?.url}`} />
                <div className='col-lg-6 col-md-6' style={{fontSize:'20px', textAlign:'center'}}><span style={{fontSize:'40px', color:'#ce8460'}}>Fun Fact!</span> <br></br> {donut?.funfact}</div>
            </div>
        </div>
    )
}

export default DonutPage