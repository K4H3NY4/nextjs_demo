import styles from '../../styles/People.module.css'
import Link from 'next/link';
import { TwitterApi } from 'twitter-api-v2';

export const getStaticProps = async () => {
    

    const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAMHuFQEAAAAAPg1GrpcWbbqHkpfIhxA6ZPRnldk%3DPi8xObshTTtIbfRJsafMPhSrEcDj1lra8s4jJKbBHiMz5ZarUR');

// Tell typescript it's a readonly app
const roClient = twitterClient.readOnly;

// Play with the built in methods
//const user = await roClient.v2.userByUsername('K4H3NY4');

const user = await roClient.v2.following('214906456');

//const followingsOfJack = await roClient.v2.following('214906456');


    return{
        props: {followers:user}
        
    }
}


const Tweeps = ({followers}) =>{
  
  
    console.log(followers.data)
    return(
        <div>
           
            <h1>Latest 100 Followers</h1>
            {followers.data.map(singlePerson =>(
                <Link className="twitter-list" href={'/people/' + singlePerson.id} key={singlePerson.id}>
                    <a className={styles.single} >
                    <h3>{singlePerson.name}</h3>
                    <p>{singlePerson.username}</p>
                    </a>
                </Link>
            ))}

<style jsx>{`
            .twitter-list {
                display: grid;
                grid-template-columns: 1fr 1fr ;
                grid-gap: 20px 60px;
                width:200px;
            }

         `} </style>
        
          
        </div>
    )
}
export default Tweeps   