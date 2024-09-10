import React from 'react'

const InfoTabContent = ({description}) => {
  return (
    <div>
        <h4>Synopsis</h4>
        <div>
            <p className='mt-2'>{description}</p>
        </div>
    </div>
  )
}

export default InfoTabContent