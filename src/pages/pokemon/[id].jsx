import {GetStaticPaths, GetStaticProps} from 'next'
import Image from 'next/image'
import style from './style.module.css'

export const getStaticPaths = async () => {
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const max = 250
    const res = await fetch(`${api}/?limit=${max}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return{
            params: {id: (index + 1).toString() }
        }
    })
    
    return{
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return{
        props: {pokemon: data}
    }

}

export default function Pokemon({pokemon}){
    return(
       <div className={style.pokemon_container}>
            <h1 className={style.title}>{pokemon.name}</h1>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                width="120"
                height="120"
                alt="pokemon"
            />

            <div className={style.number}>
                <h3>Number:</h3>
                <p>#{pokemon.id}</p>
            </div>
            <div className={style.type_container}>
                <h3>Type:</h3>
                <div>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${style.type} ${style['type_'+item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={style.data_container}>
                <div className={style.data_height}>
                    <h4>Height:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={style.data_weight}>
                    <h4>Weight</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
       </div>
    )
}