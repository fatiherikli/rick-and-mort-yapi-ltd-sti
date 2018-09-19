import React from 'react';

import { Link } from 'react-router-dom';

import EpisodeItem from './EpisodeItem';

export default function EpisodeList({
    episodes,
    hasMore,
    hasPrev,
    onLoadMore,
    onLoadPrev,
}) {
    return (
        <ul>
            <li><Link to='/' className={ 'home' }><img width={ 50 } src={ 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/138/cucumber_1f952.png' } /></Link></li>
            { episodes.map(episode => <EpisodeItem key={ episode.id } { ...episode } />) }
            { hasMore && (<li><a className={ 'load-more' } href={'#loadmore'} onClick={ onLoadMore }>Next Page</a></li>) }
            { hasPrev && (<li><a className={ 'load-prev' } href={'#loadprev'} onClick={ onLoadPrev }>Previous Page</a></li>) }
        </ul>
    );
}
