import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const Notfount = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            //router.go(-1/1)
                router.push('/')
        },3000)
    },[])
    return ( 
        <div className="not-found">
            <h1>Ooops 404!😤</h1>
            <h2>The page is not available</h2>
        <p>Go to the home page <Link href='/'><a>Homepage</a></Link> </p>
        </div>
        
     );
}
 
export default Notfount;
