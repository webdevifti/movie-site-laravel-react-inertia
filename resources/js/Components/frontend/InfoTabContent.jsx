import React from 'react'

const InfoTabContent = (props) => {
    const info = props.infoContent
  return (
    <div>
        <h4>Synopsis</h4>
        <span>Screenshots</span>

        <div>
            
             {info.screenshots.map((shot, i) => (
                <img className='mt-2 mb-2' src={shot.screen} key={i} alt="" />
              ))}

            <p className='mt-2'>{info.description}</p>
        </div>
    </div>
  )
}

export default InfoTabContent