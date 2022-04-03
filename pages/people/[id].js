import styles from '../../styles/People.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(singlePerson => {
        return {
            params: {id: singlePerson.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
      
    }

}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { singlePerson:data }
    }


}

const Details = ({ singlePerson  }) => {
    return (
        <div className={styles.single}>
            <h1>{singlePerson.name}</h1>
            <p className={styles.single} >Username: {singlePerson.username}</p>
            <p className={styles.single} >Email: {singlePerson.email}</p>
            <p className={styles.single} >Website: {singlePerson.website}</p>
            <p className={styles.single} >Phone: {singlePerson.phone}</p>
            <p className={styles.single} >Lat: {singlePerson.address.geo.lat}</p>
            <p className={styles.single} >Long:{singlePerson.address.geo.lng}</p>
          
          

        </div>
    );
}

export default Details