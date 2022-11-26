import React from 'react'

const Container = ({children}) => {
  return (
    <div className="container mx-auto lg:px-24 px-4">{children}</div>
  )
}

export default Container