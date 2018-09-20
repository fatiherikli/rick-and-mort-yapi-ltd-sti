import React, { Component } from 'react';
import Error from '../components/Error';
import Image from '../components/Image';
import Tag from '../components/Tag';

import { setState, getState } from './store';

const TAGS = [
    ['name', 'name'],
    ['status', 'status'],
    ['species', 'species'],
    ['gender', 'gender'],
    ['origin', 'origin.name'],
];

export default class Character extends Component {
    state = {
        loading: true,
        error: null,
        response: null,
    }

    componentDidMount() {
        if (this.props.autoload) {
            const { uri } = this.props;
            if (getState(uri)) {
                this.setState({
                    response: getState(uri),
                    error: null,
                    loading: false,
                });
            } else {
                fetch(
                    this.props.uri
                ).then(
                    response => response.json()
                ).then(
                    this.handleFetch
                ).catch(
                    this.handleError
                )
            }
        }
    }

    handleFetch = response => {
        this.setState({
            loading: false,
            error: null,
            response,
        });

        setState({
            [this.props.uri]: response,
        });
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
          <li>
            { error && <Error error={ error } />}
            { loading ? (
                <Image
                    src={ 'https://loading.io/spinners/bluecat/lg.blue-longcat-spinner.gif' }
                    size={ 150 }
                />
            ) : (
                <div style={{ overflow: 'hidden' }}>
                    <div style={{ float: 'left' }}>
                        <Image
                            src={ response.image }
                            size={ 150 }
                        />
                    </div>
                    <div style={{ float: 'left', width: '7em', marginBottom: '1em' }}>
                        {
                            TAGS.map(
                                ([label, path]) => 
                                    <Tag
                                        character={ response }
                                        label={ label }
                                        key={ path }
                                        path={ path }
                                    />
                            )
                        }
                    </div>
                </div>
            ) }
          </li>
        );
    }
}

Character.defaultProps = {
    autoload: true,
};
