import React from 'react'
import ReactLoading from "react-loading";



function Loader({color}) {
    return (
        <div>
            <ReactLoading type="spin" color={color}
                 height={100} width={100} className='loader' />
        </div>
    )
}

export default Loader
