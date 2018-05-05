import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieContainer extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            movies : []
        }
    }
    
componentWillMount(movies) {
    const url = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";

    axios.get(url).then((res) => {
        console.log("Response: ", res);

        this.setState({
            movies : res.data.feed.entry
        });
    })
}

render () {

    const movieList = this.state.movies.map((movieInfo, index) => {
        return <Movie info = {movieInfo} key = {index}/>
    });

    console.log("Current state: ", this.state);
    return (<div>
           {movieList}
        </div>
    )};
}

export default MovieContainer;