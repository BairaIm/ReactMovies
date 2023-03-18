function Movie(props) {
    const {
        Title: title,
        Year: year,
        Type: type,
        imdbID: id,
        Poster: poster
    } = props;

    return <div id={id} className="card">
        {
            poster === 'N/A' 
                ? <img src={`https://via.placeholder.com/430x300?text=${title}`} alt="Poster" className="card__img"/>
                : <img src={poster} alt="Poster" className="card__img"/>
        }
        
        <div className="card__description">
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{year} <span>{type}</span></p>
        </div>
    </div>
}

export { Movie };