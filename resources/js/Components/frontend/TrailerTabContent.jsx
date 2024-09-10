import React from 'react'

const TrailerTabContent = ({trailerUrl}) => {
  return (
    <div
            dangerouslySetInnerHTML={{ __html: trailerUrl }}
        />
  )
}
export default TrailerTabContent