import style from './../../styles/Ninjas.module.css'

import Link from 'next/link';

export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return{
        props : {ninja: data}
    }
}

const Ninja = ({ninja}) => {
    return (  
        <div>
            <h1>NIJAS LIST</h1>
           {ninja.map(obj=>(
               <Link  href={"/ninja/"+  obj.id} key={obj.id}>
                   <a className={style.single}>
                       <h3>{obj.name}</h3>
                   </a>
               </Link>
           ))}
        </div>
    );
}
 
export default Ninja;