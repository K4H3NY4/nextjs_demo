import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return(

        <nav>
         <div className="logo">
             <Image src="/logo.png" width={90} height={60}/> 
         </div>
         <Link href="/"><a>Home</a></Link>
         <Link href="/about"><a>About</a></Link>
         <Link href="/people"><a>People</a></Link>
         <Link href="/nft"><a>NFT</a></Link>
         <Link href="/qweert"><a>404</a></Link>
        </nav>

    );
}

export default Navbar;