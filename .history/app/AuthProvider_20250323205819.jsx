import { useUser } from '@stackframe/stack'
import { useMutation } from 'convex/react';
import React, { useEffect } from 'react'

function AuthProvider({children}) {

    const user = useUser();
    const CreateUser = useMutation(api.users.CreateUser);
    useEffect(() => {
        console.log(user);
    }, [user]);

    const CreateNewUser=()=>{
        const result = await CreateUser({
            
        })
    }

    return (
    <div>
        {children}
    </div>
    )
}

export default AuthProvider
