import Image from "next/image";
import Link from "next/link";
import style from './Card.module.css'


export default function Card({pokemon}){
    return(
        <div className={style.card}>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                width="120"
                height="120"
                alt="pokemon"
            />
            <p className={style.id}>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={style.btn}>Detalhes</Link>
        </div>
    )
}