import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter ();
    

    useEffect(() => {
        //Redirect user to homepage after landing on 404 page
        setTimeout(() =>{ router.push('/'); },5000 )

        //Use effect runs when the page loads
        console.log('use effect run')
        ,[] })


    return(
        <div className="not-found">
            <h1>Oooops..</h1>
            <h2>Page not found</h2>
            <p>Go Back to <Link href="/"> Home </Link></p>
            <p>You will be redirected in 5 Seconds</p>
        </div>
    )
}

export default NotFound;