import React from 'react';
import { Link } from 'react-router-dom';

import CharacterPreview from '../atomic/Character';

export default function EpisodeDetail({ characters, air_date, name }) {
    return (
        <ul>
            <li><Link to='/' className={ 'back' }>◁</Link></li>
            <li>
                <h2 className='episode-title'>
                    <span style={{ color: 'white', fontSize: '0.7em' }}>{ air_date }</span>
                    <br />
                    { name }
                </h2>
            </li>
            { characters.map(
                uri => 
                    <CharacterPreview key={ uri } uri={ uri } />
                ) 
            }
        </ul>
    );
}
