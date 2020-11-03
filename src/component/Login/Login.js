import React, { Component } from 'react';
import {AUTH_URL, CLIENT, LANDING_PAGE, REDIRECT_URL, TOKEN_NAME} from "../../config/config"
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import './login.css';

class Login extends Component {

    checkUrlContainsParams = (url, field) => {
        if (url.indexOf('?' + field + '=') != -1)
            return true;
        else if (url.indexOf('&' + field + '=') != -1)
            return true;
        return false
    }

    Copyright = () => {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
              viraj
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
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
            <Container component="main" maxWidth="xs">
                <div className={"paper"}>
                <CssBaseline />
                <Avatar className={"avatar"}>
                    <LockOutlinedIcon />
                </Avatar>
                <Button fullWidth onClick={() => {
                    let url = AUTH_URL + '?client_id=' + CLIENT + '&redirect_uri=' + REDIRECT_URL;
                    window.location.assign(url);
                }}
                  variant="contained" color="primary" >
                    Sign in
                </Button>
                <Box mt={8}>
                    {this.Copyright()}
                </Box>
                </div>
            </Container>
            
            )
    }
    
}

export default Login;