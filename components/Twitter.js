
import axios from 'axios';

const Twitter=()=> {
    const api = axios.create({
        baseURL:'https://api.twitter.com/',
            headers:{
    Authorization:`Bearer AAAAAAAAAAAAAAAAAAAAAMHuFQEAAAAA3j2bQDH05K0Mrnvl2o%2B3itCN3Tk%3DUZY1zqUXwDDpl7oQcUsihVdPaJexnxpgJ5cFyKs7x955A1FquH`,
    'Content-Type' : 'application/json',
    'Accept': 'application/json'
    }
       
    })
    api.get('/2/users/214906456/followers',).then(resp => {

        console.log(resp.data);
       
    })

return(

    <>
        

                <div className="col-12 m-0 p-0">
                    
                    <hr/>
                    
                    <kbd>Twitter Followers </kbd>
                </div>


    </>
)


      }

export default Twitter;
