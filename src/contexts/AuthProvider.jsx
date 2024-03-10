import { useEffect, useState } from "react"
import AuthContext from "./auth-context"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('reactAuthToken');
    const initialEmail = localStorage.getItem('reactAuthEmail');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(initialEmail);
    const history = useHistory();

    useEffect(()=>{
        const expiryTime = localStorage.getItem('reactAuthToken-expiresIn');
        if(expiryTime && expiryTime<new Date().getTime())
        {
            deleteTokenHandler();
            alert('token expired, kindly login again');
            history.push('/auth');
        }
    });

    const addTokenHandler = (newToken, email, expiresIn) => {
        email = email.replace('@','').replace('.','');
        const date = new Date().getTime()+(expiresIn*1000);
        localStorage.setItem('reactAuthToken-expiresIn',date);
        localStorage.setItem('reactAuthToken',newToken);
        localStorage.setItem('reactAuthEmail',email);
        setToken(newToken);
        setEmail(email);
    }

    const deleteTokenHandler = () => {
        localStorage.removeItem('reactAuthToken');
        localStorage.removeItem('reactAuthToken-expiresIn');
        localStorage.removeItem('reactAuthEmail');
        setToken(null);
        setEmail(null);
    }

    const authContext = {
        authToken: token,
        email: email,
        addToken: addTokenHandler,
        deleteToken: deleteTokenHandler,
    }

    // console.log(token);

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;