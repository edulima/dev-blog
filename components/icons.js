import React from 'react'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

const Icons = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="p-2">
        <FaLinkedin size={25} />
      </div>
      <div className="p-2">
        <FaGithub size={25} />
      </div>
      <div className="p-2">
        <FaStackOverflow size={25} />
      </div>
    </div>
  )
}

export default Icons
