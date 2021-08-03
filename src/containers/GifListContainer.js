import React, { Component } from 'react';
import GifList from '../components/GifList.js';
import GifSearch from '../components/GifSearch.js';

class GifListContainer extends Component {
    state = {
        gifs: []
    };

    componentDidMount() {
      this.handleSubmit()
    }

    handleSubmit = (query = "dolphin") => {
        //key rQeQ7uxMu3jih0kejUEAoNbByig5roT0
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=rQeQ7uxMu3jih0kejUEAoNbByig5roT0&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
              })
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default GifListContainer;
