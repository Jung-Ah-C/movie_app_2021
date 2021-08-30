import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// setState를 호출할 때마다 react는 새로운 state와 함께 render함수를 호출한다. (리렌더링 작업을 해줌)

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    // axios를 통해서 데이터를 가져오는데에 시간이 조금 걸리기 때문에 async와 await를 사용해서 자바스크립트에게 알려줘야
    getMovies = async () => {
        const {
            data: {
                data:{ movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                      <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
