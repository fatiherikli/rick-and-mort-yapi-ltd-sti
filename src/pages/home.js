import React, { Component } from 'react';

import Loading from '../components/Loading';
import Error from '../components/Error';
import EpisodeList from '../components/EpisodeList';


export default class Home extends Component {
    state = {
        loading: true,
        error: null,
        response: null,
        next: null,
        prev: null,
    }

    componentDidMount() {
        if (this.props.autoload) {
            this.load()
        }
    }

    load = (page = 'https://rickandmortyapi.com/api/episode/') => {
        fetch(
            page
        ).then(
            response => response.json()
        ).then(
            this.handleFetch
        ).catch(
            this.handleError
        )
    }

    handleFetch = response => {
        this.setState({
            loading: false,
            error: null,
            next: response.info.next,
            prev: response.info.prev,
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

    handleLoadMore = event => {
        event.preventDefault();
        this.load(this.state.next)
    }

    handleLoadPrev = event => {
        event.preventDefault();
        this.load(this.state.prev)
    }

    render() {
        const { loading, error, response, next, prev } = this.state;

        return (
          <div>
            { loading && <Loading />}
            { error && <Error error={ error } />}
            { response && (
                <EpisodeList
                    episodes={ response.results }
                    hasMore={ Boolean(next) }
                    hasPrev={ Boolean(prev) }
                    onLoadMore={ this.handleLoadMore }
                    onLoadPrev={ this.handleLoadPrev }
                />
            )}
          </div>
        );
    }
}

Home.defaultProps = {
    autoload: true,
};
