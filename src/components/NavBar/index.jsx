import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css"


export default function NavBar(){
    return(
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image 
                    src="/images/pokeball.png" 
                    width="30" 
                    height="30" 
                    alt="logo PokeNext"
                />
                <h1>PokeNext</h1>
            </div>
            <ul className={style.links}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}