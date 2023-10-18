import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movieList: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movieList: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movieList } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading..</span>
          </div>
        ) : (
          <div className="movies">
            {movieList.map((movie) => {
              return (
                <Movie
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
