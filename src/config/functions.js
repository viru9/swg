import {TOKEN_NAME} from "./config";

export const config = () => {
    return ({
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(JSON.parse(localStorage.getItem(TOKEN_NAME)))
      }
    });
  }