"Use Client"
import { useUser } from '@stackframe/stack'
import React from 'react'

function FeatureAssistants() {
    const user = useUser();
    return (
        <div>
        <h2 className='font-medium text-gray-500'>My Workspace</h2>
        <h2>Welcome back, {user?.displayName}</h2>
        </div>
    )
}

export default FeatureAssistants
