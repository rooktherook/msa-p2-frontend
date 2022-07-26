import '../App.css';
import Link from '@mui/material/Link';
import RecipeModal from './RecipeModal'

// App calls this function that Calls an unlisted Representation of the recipes
function List(info: any) {


    return (
        <ul>
            {info.input.results.map((item : any, i: any) => (
                <li >
                    <RecipeModal 
                    input = {item}
                    />
                </li>
            ))}
        </ul>
    )
}

export default List