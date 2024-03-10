
import React from "react";


const AuthContext = React.createContext({
        token: null,
        email: null,
        addToken: () => {},
        deleteToken: () => {},
});

export default AuthContext;