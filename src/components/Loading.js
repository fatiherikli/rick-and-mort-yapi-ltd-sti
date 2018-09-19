import React from 'react';
import { Link } from 'react-router-dom';

export default function Loading() {
    return (
        <ul>
            <li><Link to='/' className={ 'back' }>⎈</Link></li>
        </ul>
    )
}
