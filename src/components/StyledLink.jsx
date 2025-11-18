import React from 'react'

export const StyledLink = ({children, onClick}) => {
  return (
    <a onClick={onClick} className="text-[#E94057] cursor-pointer font-bold">{children}</a>
  )
}
