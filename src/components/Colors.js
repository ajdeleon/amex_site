import React from 'react'

const Colors = () => {
  return (
    <div>
      <div className="flex white h5">
        <div
          className="flex-grow-1 tc ml4 pt2"
          style={{ backgroundColor: '#2C5B6D' }}
        />
        <div
          className="flex-grow-1 tc pt2"
          style={{ backgroundColor: '#BF2926' }}
        />
        <div
          className="flex-grow-1 tc pt2"
          style={{ backgroundColor: '#938082' }}
        />
        <div
          className="flex-grow-1 tc pt2"
          style={{ backgroundColor: '#010B0C' }}
        />
        <div
          className="flex-grow-1 tc mr4 pt2"
          style={{ backgroundColor: '#D8BB4B' }}
        />
        <div className="absolute z-1 tc w-100 h-auto mt5 f2">
          Welcome to Amex Comedy
        </div>
      </div>
    </div>
  )
}

export default Colors
