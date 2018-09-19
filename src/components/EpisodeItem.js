import React from 'react';
import { Link } from "react-router-dom";

export default function EpisodeItem({ name, id, air_date, characters }) {
    return (
        <li>
            <Link to={ `/episodes/${ id }` }>
                <span style={{ color: 'white', fontSize: '0.7em' }}>{ air_date }</span>
                <br />
                { name }
            </Link>
        </li>
    );
}
