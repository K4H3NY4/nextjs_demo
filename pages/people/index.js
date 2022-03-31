import styles from '../../styles/People.module.css'


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAMHuFQEAAAAA3j2bQDH05K0Mrnvl2o%2B3itCN3Tk%3DUZY1zqUXwDDpl7oQcUsihVdPaJexnxpgJ5cFyKs7x955A1FquH");
myHeaders.append("Cookie", "guest_id=v1%3A164876910324418569; guest_id_ads=v1%3A164876910324418569; guest_id_marketing=v1%3A164876910324418569; personalization_id=\"v1_47shnrlv7gOoECfEIi4jYQ==\"");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  redirect: 'follow'
};

fetch("https://api.twitter.com/2/users/214906456/followers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

export const getStaticProps = async () => {




    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    

    return{
        props: {people:data}
    }
}

const People = ({people}) =>{
    return(
        <div>
            <h1>All people</h1>
            {people.map(singlePerson =>(
                <div key={singlePerson.id}>
                    <a className={styles.single} >
                    <h3>{singlePerson.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    )
}
export default People 