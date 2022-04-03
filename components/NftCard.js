import Link from "next/link"
import Image from "next/image"

export default function NftCard ({nft}){
    const {title, slug, thumbnail, storelink, desc} = nft.fields

    return (
        <div className="card">
            <div className="featured">
               <Image
               src={'https:' + thumbnail.fields.file.url}
               width={600 }
               height={600}
               />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>

                </div>
                <div className="actions">
                    <Link href={'/nft/' + slug}> 
                    <a> VIEW THIS </a> 
                    </Link>

                </div>

            </div>


            <style jsx>{`
            .card {
                transform: rotateZ(-3deg);
              }

             
              .content {
                background: #fff;
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                margin: 0;
                position: relative;
                top: -40px;
                left: -10px;
                transform: rotateZ(3deg);
              }
              .info {
                padding: 16px;
              }
              .info h4 {
                margin: 4px 0;
                text-transform: uppercase;
              }
              .info p {
                margin: 0;
                color: #777;
              }
              .actions {
                margin-top: 0px;
                display: flex;
                justify-content: center;
                color: #fff !important;
                font-weight:800;
                background: #f01b29;
                padding: 16px 24px;
                text-decoration: none;
                transform: rotateZ(3deg);
              }

              .actions a {
                  color: #fff !important;
              }
            
            
            
            `}</style>

        </div>
    )
   
}