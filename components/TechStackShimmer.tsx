import React from 'react'

interface Props {}

const TechStackShimmer = (props: Props) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="w-full mb-4 h-10 bg-gray-200 animate-pulse rounded-full"></div>
        <div className="w-3/4 mb-3 h-3 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="w-full mb-4 h-2 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    </>
  )
}

export default TechStackShimmer
