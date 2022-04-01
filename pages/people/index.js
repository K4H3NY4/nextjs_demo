import Twitter from '../../components/Twitter';
import styles from '../../styles/People.module.css'

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
            <Twitter />
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