import React from 'react'

export const Card = ({color,title,content}) => {
  return (
    <div className="m-3">
    <div className={`bg-${color}-800 text-base sm:text-lg font-bold text-white p-3 w-full`}>{title}</div>
    <div className={`bg-${color}-700 font-bold text-white p-3 w-full`}>{content}</div>
  </div>
  )
}
