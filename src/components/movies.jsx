import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = { movies: getMovies() };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    // since the key and value are the same, we just pass 'movies'
    this.setState({ movies: movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <h1>There are no movies in the delete database</h1>;
    return (
      <>
        <h1>Showing {count} movies in the database.</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
