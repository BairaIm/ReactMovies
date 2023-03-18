import { Movie } from './Movie';

function Movies(props) {
    const {movies} = props;

    return <div className="cards">
        {movies 
            ? movies.map(movie => {
                return <Movie key={movie.imdbID} {...movie}/>
            }) : <h4 className="not_found">Nothing found</h4>
        }
    </div>
}

export { Movies };