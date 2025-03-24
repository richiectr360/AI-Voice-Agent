"Use Client"
import { useUser } from '@stackframe/stack'
import React from 'react'

function FeatureAssistants() {
    const user = useUser();
    return (
        <div>
            <div>
                <h2 className='font-medium text-gray-500'>My Workspace</h2>
                <h2 className='text-3xl font-bold'>Welcome back, {user?.displayName}</h2>
            </div>    
        </div>
    )
}

export default FeatureAssistants
