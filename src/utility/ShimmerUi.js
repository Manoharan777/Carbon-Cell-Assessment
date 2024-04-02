import React from 'react'

const ShimmerUi = () => {
  return (
    <div className="bg-grey-400 p-4 rounded-md w-52 h-48">
      <div className="grid grid-cols-1 bg-grey-400 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      <div className="grid grid-cols-1 bg-grey-400 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      <div className="grid grid-cols-1 bg-grey-400 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </div>
  );
}

export default ShimmerUi;