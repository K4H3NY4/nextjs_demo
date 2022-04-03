import Head from "next/head";
import { createClient } from "contentful";
import NftCard from '../../components/NftCard';


let client = createClient ({
    space: "ucidywn4lkw6",
    accessToken: "C2YerzOIjGcDFKKhi0zz4vPd3ALwsUsK0ollfTdVdmI",
   
})

export async function getStaticProps (){

   

    const data = await client.getEntries ({ 
        content_type: 'nft' })

    return{
        props:{
            nfts: data.items
        }
    }
}


export default function Nft ({nfts}) {
    console.log({nfts})
    return(
        <>        
         <Head>
            <title>NFT</title>
             <meta name='keywords' content='Next Js Demo'/>
          </Head>
        <div className="nft-list">
            
        {nfts.map(nft => (
            <NftCard key={nft.sys.id} nft={nft} />
        ))}
        </div>
        
        <style jsx>{`
            .nft-list {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 20px 60px;
            }

         `} </style>
        </>

            )
}

