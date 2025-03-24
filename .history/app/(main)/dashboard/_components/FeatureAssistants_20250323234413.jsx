import { useUser } from '@stackframe/stack'
import React from 'react'

function FeatureAssistants() {
    const user = useUser()l;
  return (
    <div>
      <h2>My Workspace</h2>
      <h2>Welcome back</h2>
    </div>
  )
}

export default FeatureAssistants
