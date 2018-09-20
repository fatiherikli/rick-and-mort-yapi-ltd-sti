import React from 'react';

export default function Image({ src, size, alt }) {
    return (
        <div style={{ 
            width: size,
            height: size,
            background: 'url(https://loading.io/spinners/bluecat/lg.blue-longcat-spinner.gif)',
            backgroundSize: size/2,
         }}>
            <img
                alt={ alt || 'SOLENYA!' }
                style={{
                    width: size,
                    height: size,
                }}
                src={ src }
                width={ size }
            />
        </div>
    )
}
