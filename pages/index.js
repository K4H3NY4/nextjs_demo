import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
  <Head>
    <title>Home | Next Js Demo</title>
    <meta name='keywords' content='Next Js Demo'/>

  </Head>

    <div>
  
      <h1 className={styles.title} > Homepage new </h1>
      <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati hic iure! Atque eveniet voluptate esse perferendis, dolores quam molestias optio modi voluptatibus maxime non repudiandae asperiores natus molestiae et expedita sint vel corporis, recusandae, fugit enim exercitationem saepe id. Provident, dolorem repellendus. Fugiat, rerum. </p> 

      <Link href="/people">
      <a className={styles.btn}Listings>View people</a>
      </Link>
   
    </div>
    </>
  )
}
