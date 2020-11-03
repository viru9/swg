import React, { Component } from 'react';
import {AUTH_URL, CLIENT, LANDING_PAGE, REDIRECT_URL, TOKEN_NAME} from "../../config/config"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

class Login extends Component {

    checkUrlContainsParams = (url, field) => {
        if (url.indexOf('?' + field + '=') != -1)
            return true;
        else if (url.indexOf('&' + field + '=') != -1)
            return true;
        return false
    }

    componentDidMount() {

        let searchContent = this.props.location.search && this.props.location.search

         if (this.checkUrlContainsParams(searchContent, 'code')) {
            const urlParams = new URLSearchParams(searchContent);
            const tokenId = urlParams.get('code')
            localStorage.setItem(TOKEN_NAME,tokenId);
            this.props.history.push(LANDING_PAGE);
        }
       
    }

    render(){
        return(
            <Container maxWidth="sm">
                <Button onClick={() => {
                    let url = AUTH_URL + '?client_id=' + CLIENT + '&redirect_uri=' + REDIRECT_URL;
                    window.location.assign(url);
                }}
                  variant="contained" color="primary" >
                    Login
                </Button>
            </Container>
            
            )
    }
    
}

export default Login;