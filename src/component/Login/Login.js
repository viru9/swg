import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
import {TOKEN_NAME} from "../../config/config"

const onSuccess = response => console.log('onSuccess: ',response);
const onFailure = response => console.error('onFailure 1:', response);

const AUTH_URL = "https://github.com/login/oauth/authorize";
const CLIENT = "a66a6dd6ee20066edfcd";
const REDIRECT_URL = "http://localhost:3000/login";

const Login = ()=>{
    return(
    //     <OAuth2Login
    // authorizationUrl="https://github.com/login/oauth/authorize"
    // responseType="token"
    // clientId="a66a6dd6ee20066edfcd"
    // redirectUri="http://localhost:3000/login"
    // onSuccess={onSuccess}
    // onFailure={onFailure}/>
    <button onClick={() => {
        localStorage.setItem(TOKEN_NAME,"tokenId");
    //    let url = AUTH_URL + '?client_id=' + CLIENT + '&redirect_uri=' + REDIRECT_URL;
    //     window.location.assign(url);
        // window.open(url, 'OAuth Login', "height=200,width=200");
    }}>Login</button>
    )
}

export default Login;