import React from 'react'
import Image from 'next/image'

function AppHeader() {
  return (
    <div>
      <Image src={'./logo.svg'} alt = 'logo'/>
    </div>
  )
}

export default AppHeader