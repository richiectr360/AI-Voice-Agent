"use client"
import React from 'react'
import {ConvexProvider, ConvexReactClient} from 'convex/react'

function Provider({children}) {
  return (
    <div>{children}</div>
  )
}

export default Provider