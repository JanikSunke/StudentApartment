import { createContext, useState } from "react";


export const StateContext = createContext([]);

export default function ListProvider(props) {
    const [modal, setModal] = useState({
        logIn: false,
        createAccount: false,
        loggedIn: false, 
        adminLoggedIn: false,
        email: "jens@gmail.com",
        password: "jens123"
    });

    return (
        <StateContext.Provider value={[modal, setModal]}>
                {props.children}
        </StateContext.Provider>
    );
}