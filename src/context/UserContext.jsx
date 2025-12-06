import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    const saveUser = (email, accessToken) => {
        setUser({
            email,
            token: accessToken
        });
    }

    const deleteUser = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, saveUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
}