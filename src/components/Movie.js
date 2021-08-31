import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname: '/movie-detail',
            // 링크에 매개변수를 넘겨주는 역할을 해줌, 넘어간 링크 파일에서는 props로 해당 정보 사용 가능
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="genres">
                        {genres.map((genre, index) =>
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        )}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;