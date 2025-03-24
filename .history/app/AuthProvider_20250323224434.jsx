"use client";
import { api } from '@/convex/_generated/api';
import { useUser } from '@stackframe/stack';
import { useMutation } from 'convex/react';
import React, { useEffect } from 'react';

function AuthProvider({children}) {

    const user = useUser();
    const CreateUser = useMutation(api.users.CreateUser);
    const [userData, setUserData] = useState();
    useEffect(() => {
        console.log(user);
        user  && CreateNewUser();
    }, [user]);

    const CreateNewUser= async ()=>{
        const result = await CreateUser({
            name: user?.displayName,
            email: user?.primaryEmail
        });
        console.log(result);
    }

    return (
    <div>
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    </div>
    )
}

export default AuthProvider
