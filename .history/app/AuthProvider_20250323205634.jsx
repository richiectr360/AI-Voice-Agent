import { useUser } from '@stackframe/stack'
import React, { useEffect } from 'react'

function AuthProvider({children}) {

    const user = useUser();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
    <div>
        {children}
    </div>
    )
}

export default AuthProvider
