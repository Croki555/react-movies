import React from "react";

const Search = ({ getMovies = Function.prototype, defaultValue }) => {
    const [search, setSearch] = React.useState(defaultValue);
    const [type, setType] = React.useState('all');
    

    const handleKey = (ev) => {
        if(ev.key === 'Enter') {
            getMovies(search, type);
        }
    }
    const handleFilter = (ev) => {
            setType(ev.target.dataset.type);
            getMovies(search, ev.target.dataset.type);
    }
    
    return (
        <div className="search mb-3">
            <input 
                className="form-control mb-3" 
                type="search" 
                placeholder="Search" 
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                onKeyDown={handleKey}
            />
            <button className="btn btn-sm btn-primary" onClick={() => getMovies(search, type)}>Search</button>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" id="all" data-type="all" checked={type === 'all'} onChange={handleFilter}/>
                <label className="form-check-label text-white" htmlFor="all">All</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" id="movie" data-type="movie" checked={type === 'movie'} onChange={handleFilter}/>
                <label className="form-check-label text-white" htmlFor="movie">Movies only</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="type" id="series" data-type="series" checked={type === 'series'} onChange={handleFilter}/>
                <label className="form-check-label text-white" htmlFor="series">Series only</label>
            </div>
        </div>
    );
}


export { Search }