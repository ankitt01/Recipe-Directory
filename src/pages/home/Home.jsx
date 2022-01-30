import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Home() {

    const {data, isPending, error} = useFetch('http://127.0.0.1:5500/data/db.json')
    console.log(data) 
    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading..</p>}
            {data && <RecipeList recipes={data.recipes} />}
        </div>
    )
}