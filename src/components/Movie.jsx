const Movie = ({Title: title, Year: year, imdbID: id, Type: type, Poster: poster}) => {
    return (
        <div className="col">
            <div className="card h-100" id={id}>
                {poster === 'N/A' ? (
                    <svg className="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
                    </svg>
                ) : (
                    <img className="bd-placeholder-img card-img-top w-100" style={{ height: '245px' }} src={poster} alt={title} />
                )}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <div className="card-footer text-body-secondary d-flex justify-content-between">
                    <small>{year}</small>
                    <small>{type}</small>
                </div>
            </div>
        </div>
    );
}

export { Movie };