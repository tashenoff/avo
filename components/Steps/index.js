import React from 'react'
import Ball from '../icons/Ball'

const Steps = () => {
    return (

        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
                <Ball fill="red" />
                <span className="mt-5">10Order Placement</span>
            </div>

            <div className="flex flex-col items-center">
                <Ball fill="red" />
                <span className="mt-5">10Order Placement</span>
            </div>

            <div className="flex flex-col items-center">
                <Ball fill="red" />
                <span className="mt-5">10Order Placement</span>
            </div>


            <div className="flex flex-col items-center">
                <Ball fill="red" />
                <span className="mt-5">10Order Placement</span>
            </div>

        </div>
    )
}

export default Steps
