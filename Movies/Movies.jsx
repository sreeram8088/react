import React from 'react';
import './styles.css';
import Movie from '../Movie/Movie.jsx';
import movies from '../Movie/Movies/movies'

class Movies extends React.Component{
    state = {...movies};

    getMovie = movie  => {
        return <Movie name={movie.name}  likes={movie.likes} banner={movie.banner} hero={movie.hero}/>;
    };
    render(){
        
        return (
  <div className='movie-section'>
     { Object.keys(this.state).map(x =>{
          return this.getMovie(this.state[x]);
      })}
    
  </div>
        );
    }
}
export default Movies;