import React, { Component } from 'react';

import Loading from '../components/Loading';
import Error from '../components/Error';
import EpisodeDetail from '../components/EpisodeDetail';

export default class Episode extends Component {
    state = {
        loading: true,
        error: null,
        response: null,
    }

    componentDidMount() {
        if (this.props.autoload) {
            const { episodeId } = this.props.match.params;
            fetch(
                `https://rickandmortyapi.com/api/episode/${ episodeId }`
            ).then(
                response => response.json()
            ).then(
                this.handleFetch
            ).catch(
                this.handleError
            )
        }
    }

    handleFetch = response => {
        this.setState({
            loading: false,
            error: null,
            response,
        })
    }

    handleError = error => {
        this.setState({
            loading: false,
            response: null,
            error: String(error),
        });
    }

    render() {
        const { loading, error, response } = this.state;

        return (
          <div>
            { loading && <Loading />}
            { error && <Error error={ error } />}
            { response && <EpisodeDetail { ...response } /> }
          </div>
        );
    }
}

Episode.defaultProps = {
    autoload: true,
};
