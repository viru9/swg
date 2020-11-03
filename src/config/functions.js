import {TOKEN_NAME} from "./config";

export const config = () => {
    return ({
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '.concat(JSON.parse(localStorage.getItem(TOKEN_NAME)))
      }
    });
  }

export const minSearch = (data,search) => {
  let result = [];
  if (search && search.length > 1) {
    data.data.map((value)=>{
      if(value.name.toLowerCase().indexOf(search)> -1){
        result.push(value);
      }
    })
    return result;
  } else {
      return [];
  }
}
