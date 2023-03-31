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
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) =>(
          <li key={pokemon.id}>{pokemon.name} - {pokemon.id}</li>
        ))}
      </ul>
    </div>
  )
}
