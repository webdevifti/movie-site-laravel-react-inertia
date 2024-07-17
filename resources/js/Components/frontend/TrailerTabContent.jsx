import React from 'react'

const TrailerTabContent = (props) => {
    const trailer_link = props.trailerUrl
  return (
    <div>
        <iframe 
        width="560" 
        height="315" 
        src={trailer_link} 
        title="YouTube video player" 
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
  )
}

export default TrailerTabContent