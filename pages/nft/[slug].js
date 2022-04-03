import { createClient } from "contentful"
import Image from "next/image"
import styles from '../../styles/People.module.css'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Link from "next/link"

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
           
           <div className="nft-details">
               <div>
           <Image
               src={'https:' + nft.fields.thumbnail.fields.file.url}
               width={600 }
               height={600}
               />
              
          
               </div>
               <div>
            
            <h1>{nft.fields.title}</h1>
            <p>{documentToReactComponents(nft.fields.desc)}</p>
        <br/>
            <Link href={nft.fields.storeLink}>
            <a  className="store-link-btn"> STORE LINK</a>
            </Link>
           
  
            

        </div>
       
        </div>

        <style jsx>{`
        .nft-details{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
        }

        .store-link-btn{
            background-color:#222;
            padding: 10px;
            color:#fff;
            border-radius: 5px;
            margin-top:60px;
        }

        .store-link-btn:hover{
            background-color: #f01b29;
            padding: 10px;
            color:#fff;
            border-radius: 5px;
            margin-top:60px;
        }
        
        `}</style>
        </div>
    )
}