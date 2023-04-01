import Image from 'next/image'
import style from '../styles/Home.module.css'
import {GetStaticProps} from 'next'

export async function getStaticProps(){
  const max = 250
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${max}`)
  const data = await res.json()
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return{
    props: {
      pokemons: data.results
    }
  }
}


export default function Home({pokemons}) {
  return (
    <>
      <div className={style.title_container}>
        <h1>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="Pokaball" />
      </div>
      <div className={style.pokemons_container}>
        {pokemons.map((pokemon) =>(
          <p key={pokemon.id}>{pokemon.name} - {pokemon.id}</p>
        ))}
      </div>
    </>
  )
}
