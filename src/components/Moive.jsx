import React from "react";
import axios from "axios";
import "./Movie.css";
class Movie extends React.Component {
  state = {
    listMovie: {},
  };
  componentDidMount() {
    let options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/auto-complete",
      params: { q: "game of thr" },
      headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "9738a541abmshd571c619876169cp177d97jsn4ffff615dd5d",
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({
          listMovie: response.data.d,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let listMovie = this.state.listMovie;
    console.log(listMovie);

    return (
      <>
        <header>
          <input className="search" type="text" placeholder="Search....." />
        </header>
        <div className="movie-container">
          {listMovie &&
            listMovie.length > 0 &&
            listMovie.map((movie) => {
              return (
                <div className="movie">
                  <img src={movie.i.imageUrl} alt={movie.l} />
                  <div className="movie-content">
                    <h5 className="movie-title">{movie.l}</h5>
                    <span className="movie-author">{movie.s}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default Movie;
