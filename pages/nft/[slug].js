import { createClient } from "contentful"
import Image from "next/image"
import styles from '../../styles/People.module.css'

const client = createClient ({
    space: "ucidywn4lkw6",
    accessToken: "C2YerzOIjGcDFKKhi0zz4vPd3ALwsUsK0ollfTdVdmI",
   
})


export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'nft'
    })

    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })

    return{
        paths,
        fallback: false
    }
}


//Select item by unique slug, id , etc
export async function getStaticProps ( {params} ){
    const {items} = await client.getEntries({
        content_type: 'nft',
        'fields.slug': params.slug
    })

   return {
       props: {nft : items[0]}
   }
}


export default function NftDetails ( {nft} ){
    console.log(nft)
    return(
        <div>
           <h1>{nft.fields.title}</h1>
           <div>
           <Image
               src={'https:' + nft.fields.thumbnail.fields.file.url}
               width={600 }
               height={600}
               />
               </div>
               <div className={styles.single}>
            
            <p className={styles.single} >{nft.fields.title}</p>
            <p className={styles.single} >{nft.fields.desc}</p>
  
          
          

        </div>
        </div>
    )
}