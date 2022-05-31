import React from 'react';

export default function ErrorBoundary(props) {
    return (
        <div>
            Error :
            {props.renderError}
        </div>
    )
}