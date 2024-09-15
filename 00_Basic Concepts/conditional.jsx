import React from 'react'

const AppleContainer = ({ appleCount, ContainerName }) => {
  return (
    <div className="apple-Container">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{ContainerName} {appleCount === 10 ? "(Full)" : (appleCount === 0 ? "(Empty)" : "(Not Full)")}</p>
    </div>
  )
}

export default AppleContainer
