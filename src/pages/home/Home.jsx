import './Home.css'
import {useFetch} from '../../hooks/useFetch'

export default function Home() {

    const {data, isPending, error} = useFetch('http://127.0.0.1:5500/data/db.json')
    console.log(data) 
    return (
        <div className='home'>
            {/* {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading..</p>} */}
            {data && data.recipes.map(recipe => (
                <h2 key={recipe.id}>{recipe.title}</h2>
            ))}
        </div>
    )
}