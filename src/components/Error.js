import React from 'react';

export default function Error({ error }) {
    return (
        <div>
            <h3>Shit happens</h3>
            <p>{ error }</p>
        </div>
    )
}
