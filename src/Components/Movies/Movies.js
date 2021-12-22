import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MoviesCard from '../MoviesCard/MoviesCard';

const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])
    return (
        <div>
            <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
                {
                    movies.map((movie) => <MoviesCard key={movie.show.id}  movie={movie} />)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Movies;