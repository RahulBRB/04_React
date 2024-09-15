import React from 'react'

const AppleContainer = ({appleCount, ContainerName}) => {
  return (
    <div className="apple-Container">
        <h1>
            <span>{appleCount}</span> apples
        </h1>
        <p>{ContainerName}</p>
    </div>
  )
}

export default AppleContainer;
