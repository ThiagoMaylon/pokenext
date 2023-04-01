import {GetStaticPaths, GetStaticProps} from 'next'

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
        <>
            <h1>{pokemon.name}</h1>
        </>
    )
}