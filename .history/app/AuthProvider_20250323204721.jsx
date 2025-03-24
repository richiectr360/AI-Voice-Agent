import { useUser } from '@stackframe/stack'
import React from 'react'

function AuthProvider({children}) {

    const user = useUser();

    return (
    <div>
        {children}
    </div>
    )
}

export default AuthProvider
