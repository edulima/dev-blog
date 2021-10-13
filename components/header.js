import React from 'react'
import Icons from '../components/icons'

const Header = ({ title, subtitle, description}) => {
  return (
    <>
      <h1 className="text-6xl font-bold text-center">
        {title}{' '}
        <a className="text-blue-600" href="#">
          {subtitle}
        </a>
      </h1>

      <p className="mt-3 text-base text-center">
        {description}
      </p>

      <Icons />
    </>
  )
}

export default Header
