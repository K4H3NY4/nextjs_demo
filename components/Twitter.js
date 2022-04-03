
import axios from 'axios';

const Twitter=()=> {

        const api = axios.create({
        baseURL:'https://api.twitter.com/',
        headers:{
        Authorization:`Bearer AAAAAAAAAAAAAAAAAAAAAMHuFQEAAAAA3j2bQDH05K0Mrnvl2o%2B3itCN3Tk%3DUZY1zqUXwDDpl7oQcUsihVdPaJexnxpgJ5cFyKs7x955A1FquH`,
        'Content-Type' : 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin':'http://localhost:3000'
        }  
    })

       
        api.get('/2/users/214906456/followers',).then(function (response){ 
            console.log(response.data.data);
        }).catch(err => err);


  





  

      }

export default Twitter;
