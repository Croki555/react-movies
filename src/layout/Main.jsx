import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;


function Main() {
    const [defaultSearch, setDefaultSearch] = React.useState('avengers');
    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    
    const getMovies = (str = 'avengers', type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
            type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then(response => response.json())
            .then(function (data) {
                setLoading(false);
                setMovies(data.Search ?? []);
            })
            .catch((err) => {
                console.error(err)
                setLoading(false) 
        });
    }

    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then(response => response.json())
            .then(function (data) {
                setMovies(data.Search);
                setLoading(false); 
            })
            .catch((err) => {
                console.error(err)
                setLoading(false) 
            });
    }, [])

    

    return (
        <main className="content bg-body py-5">
            <div className="container-xxl">
                <Search getMovies={getMovies} defaultValue={defaultSearch}/>
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </div>
        </main>
    );
}

export { Main };