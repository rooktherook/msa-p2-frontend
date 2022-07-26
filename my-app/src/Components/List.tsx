import '../App.css';
import Link from '@mui/material/Link';

// App calls this function that Calls an unlisted Representation of the recipes
function List(info: any) {

    return (
        <ul>
            {info.input.results.map((item : any, i: any) => (
                <li >
                    <Link href = {item.url}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default List